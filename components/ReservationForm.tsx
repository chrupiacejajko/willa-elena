import React, { useState, useEffect, useRef } from 'react';
import { Send, Calendar as CalendarIcon, User, Users, MessageSquare, Phone, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../components/Animations';

const MONTHS = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const WEEKDAYS = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

// --- CUSTOM CALENDAR COMPONENT ---
interface CustomCalendarProps {
  value: string;
  onChange: (date: string) => void;
  minDate?: string;
  onClose: () => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ value, onChange, minDate, onClose }) => {
  const initialDate = value ? new Date(value) : (minDate ? new Date(minDate) : new Date());
  const [viewDate, setViewDate] = useState(initialDate);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust to Monday start (0=Mon, 6=Sun)
  };

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setViewDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setViewDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDayClick = (day: number) => {
    // Format YYYY-MM-DD manually to avoid timezone issues
    const m = currentMonth + 1;
    const dateStr = `${currentYear}-${m < 10 ? '0' + m : m}-${day < 10 ? '0' + day : day}`;
    onChange(dateStr);
    onClose();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Generate grid
  const days = [];
  // Empty slots for previous month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // Days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isDateDisabled = (day: number) => {
    if (!minDate) return false;
    const m = currentMonth + 1;
    const checkDate = `${currentYear}-${m < 10 ? '0' + m : m}-${day < 10 ? '0' + day : day}`;
    return checkDate < minDate;
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    const d = new Date(value);
    return d.getDate() === day && d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  };

  return (
    <div className="absolute top-full left-0 mt-2 w-full sm:w-[320px] bg-charcoal-900 border border-gold-500/30 rounded-sm shadow-2xl z-50 p-4 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-1 hover:text-gold-500 transition-colors text-white">
          <ChevronLeft size={20} />
        </button>
        <span className="text-white font-serif font-bold text-lg">
          {MONTHS[currentMonth]} {currentYear}
        </span>
        <button onClick={handleNextMonth} className="p-1 hover:text-gold-500 transition-colors text-white">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map(d => (
          <div key={d} className="text-center text-xs text-gray-500 font-bold uppercase">
            {d}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          if (day === null) return <div key={`empty-${idx}`} />;
          const disabled = isDateDisabled(day);
          const selected = isSelected(day);

          return (
            <button
              key={day}
              onClick={(e) => { e.preventDefault(); if (!disabled) handleDayClick(day); }}
              disabled={disabled}
              className={`
                h-10 w-full flex items-center justify-center text-sm rounded-sm transition-all
                ${selected ? 'bg-gold-500 text-charcoal-900 font-bold shadow-lg shadow-gold-500/20' : ''}
                ${!selected && !disabled ? 'text-white hover:bg-white/10 hover:text-gold-500' : ''}
                ${disabled ? 'text-gray-700 cursor-not-allowed' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const ReservationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  // Date logic
  const today = new Date().toISOString().split('T')[0];
  const [arrivalDate, setArrivalDate] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');

  // Calendar State
  const [activeCalendar, setActiveCalendar] = useState<'arrival' | 'departure' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // SPAM PROTECTION
  const [honeyPot, setHoneyPot] = useState(''); // Honeypot field
  const mountTime = useRef(Date.now()); // Time check

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveCalendar(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleArrivalChange = (date: string) => {
    setArrivalDate(date);
    // Reset departure if it's before new arrival
    if (departureDate && date >= departureDate) {
      setDepartureDate('');
      // Optionally open departure calendar automatically
      setTimeout(() => setActiveCalendar('departure'), 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check: If hidden field has value, it's a bot.
    if (honeyPot) {
      console.log("Spam detected (honeypot)");
      return; // Silent fail (don't alert the bot)
    }

    // 2. Time check: If submitted too fast (< 2 seconds), it's a bot.
    if (Date.now() - mountTime.current < 2000) {
      console.log("Spam detected (too fast)");
      return; // Silent fail
    }

    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setArrivalDate('');
      setDepartureDate('');
    }, 5000);
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <section id="formularz" className="py-24 bg-charcoal-800 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">Bezpośrednia Rezerwacja</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Zapytaj o Termin</h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl mx-auto">
              Gwarantujemy najniższą cenę przy rezerwacji bezpośredniej. Wypełnij formularz, a oddzwonimy z ofertą w ciągu godziny.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="bg-charcoal-900 p-8 md:p-12 rounded-sm border border-gold-500/20 shadow-2xl relative overflow-hidden" ref={containerRef}>
          {status === 'success' ? (
            <div className="absolute inset-0 bg-charcoal-900 flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Wiadomość Wysłana!</h3>
              <p className="text-gray-400">Dziękujemy. Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-gold-500 text-xs uppercase font-bold tracking-widest hover:text-white transition-colors">
                Wyślij kolejne zapytanie
              </button>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* SPAM PROTECTION: Honeypot Field (Invisible) */}
            <div className="opacity-0 absolute top-0 left-0 h-0 w-0 z-[-1] overflow-hidden">
              <label htmlFor="website_hp">Website</label>
              <input
                type="text"
                id="website_hp"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                value={honeyPot}
                onChange={(e) => setHoneyPot(e.target.value)}
              />
            </div>

            {/* --- PERSONAL INFO --- */}
            <div className="col-span-1">
              <label className="block text-xs text-gold-500 font-bold uppercase tracking-widest mb-2">Imię i Nazwisko</label>
              <div className="relative group">
                <input required type="text" className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm pl-10" placeholder="Jan Kowalski" />
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-500 transition-colors" />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-xs text-gold-500 font-bold uppercase tracking-widest mb-2">Telefon</label>
              <div className="relative group">
                <input required type="tel" className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm pl-10" placeholder="606 649 799" />
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-500 transition-colors" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xs font-mono">+48</span>
              </div>
            </div>

            {/* --- PREFERENCES --- */}
            <div className="col-span-1 md:col-span-2 border-t border-white/5 pt-4 mt-2">
              <h4 className="text-white font-serif text-lg mb-4">Szczegóły Pobytu</h4>
            </div>

            {/* Room Type */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Interesuje mnie</label>
              <div className="relative group">
                <select className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm appearance-none cursor-pointer">
                  <option>Pokój Standard (2 os.)</option>
                  <option>Pokój Comfort z balkonem</option>
                  <option>Apartament Rodzinny</option>
                  <option>Apartament Suite</option>
                  <option>Cały obiekt / Grupa</option>
                  <option>Jeszcze nie wiem / Proszę o radę</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-500 pointer-events-none" />
              </div>
            </div>

            {/* Guest Count - Adults & Children */}
            <div className="col-span-1">
              <label className="block text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Dorośli</label>
              <div className="relative">
                <select className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm appearance-none pl-10 cursor-pointer">
                  <option>1 Osoba</option>
                  <option defaultValue="2 Osoby">2 Osoby</option>
                  <option>3 Osoby</option>
                  <option>4 Osoby</option>
                  <option>5+ Osób</option>
                </select>
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Dzieci</label>
              <div className="relative">
                <select className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm appearance-none pl-10 cursor-pointer">
                  <option>Bez dzieci</option>
                  <option>1 Dziecko</option>
                  <option>2 Dzieci</option>
                  <option>3 Dzieci</option>
                  <option>4+ Dzieci</option>
                </select>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4">
                  <span className="text-xs font-bold text-gold-500">Jr</span>
                </div>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* --- CUSTOM DATE PICKERS --- */}
            <div className="col-span-1 relative">
              <label className="block text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Data Przyjazdu</label>
              <div
                className={`relative group cursor-pointer border ${activeCalendar === 'arrival' ? 'border-gold-500' : 'border-white/10'} rounded-sm bg-charcoal-800 transition-colors`}
                onClick={() => setActiveCalendar(activeCalendar === 'arrival' ? null : 'arrival')}
              >
                <div className="w-full px-4 py-3 text-white pl-10 h-[50px] flex items-center">
                  {arrivalDate ? formatDateDisplay(arrivalDate) : <span className="text-gray-500">Wybierz datę</span>}
                </div>
                <CalendarIcon size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${activeCalendar === 'arrival' || arrivalDate ? 'text-gold-500' : 'text-gray-500'} transition-colors`} />
              </div>

              {activeCalendar === 'arrival' && (
                <CustomCalendar
                  value={arrivalDate}
                  onChange={handleArrivalChange}
                  minDate={today}
                  onClose={() => { }}
                />
              )}
            </div>

            <div className="col-span-1 relative">
              <label className="block text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Data Wyjazdu</label>
              <div
                className={`relative group cursor-pointer border ${activeCalendar === 'departure' ? 'border-gold-500' : 'border-white/10'} rounded-sm bg-charcoal-800 transition-colors ${!arrivalDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => arrivalDate && setActiveCalendar(activeCalendar === 'departure' ? null : 'departure')}
              >
                <div className="w-full px-4 py-3 text-white pl-10 h-[50px] flex items-center">
                  {departureDate ? formatDateDisplay(departureDate) : <span className="text-gray-500">Wybierz datę</span>}
                </div>
                <CalendarIcon size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${activeCalendar === 'departure' || departureDate ? 'text-gold-500' : 'text-gray-500'} transition-colors`} />
              </div>

              {activeCalendar === 'departure' && (
                <CustomCalendar
                  value={departureDate}
                  onChange={setDepartureDate}
                  minDate={arrivalDate || today}
                  onClose={() => setActiveCalendar(null)}
                />
              )}
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2 mt-2">
              <label className="block text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Dodatkowe życzenia</label>
              <div className="relative group">
                <textarea rows={3} className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-sm pl-10" placeholder="Np. łóżeczko turystyczne, pobyt z psem, późny przyjazd..."></textarea>
                <MessageSquare size={16} className="absolute left-3 top-4 text-gray-500 group-focus-within:text-gold-500 transition-colors" />
              </div>
            </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2 pt-6">
              <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-bold uppercase tracking-[0.2em] py-4 rounded-sm transition-all shadow-lg hover:shadow-gold-500/20 flex items-center justify-center gap-2 group">
                <span>Wyślij Zapytanie</span>
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <div className="flex items-center justify-center gap-6 mt-6">
                <p className="text-center text-xs text-gray-500">
                  Lub zadzwoń: <a href="tel:+48606649799" className="text-gold-500 hover:underline font-bold">+48 606 649 799</a>
                </p>
                <span className="text-gray-700">|</span>
                <p className="text-center text-xs text-gray-500">
                  Recepcja czynna: <span className="text-gray-400">8:00 - 22:00</span>
                </p>
              </div>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};