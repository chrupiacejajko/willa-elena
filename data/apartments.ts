export interface Apartment {
    id: string;
    name: string;
    type: string;
    capacity: string;
    size: string;
    bed: string;
    price: string;
    desc: string;
    features: string[];
    images: string[];
}

export const apartmentsList: Apartment[] = [
    {
        id: "suite-balcony",
        name: "Apartament typu Suite z balkonem",
        type: "Premium",
        capacity: "4-6 Osób",
        size: "45 m²",
        bed: "2x Pojedyncze + 1x Podwójne + Sofa",
        price: "80-130",
        desc: "Luksusowy suite o powierzchni 45 m² składający się z przestronnego salonu, oddzielnej sypialni oraz prywatnej łazienki. W pełni wyposażony aneks kuchenny (płyta, lodówka, mikrofalówka) pozwala na swobodne przygotowywanie posiłków. Apartament posiada balkon z widokiem na miasto, ekspres do kawy oraz telewizor z płaskim ekranem. Idealny dla rodzin ceniących przestrzeń i niezależność.",
        features: [
            "Prywatny aneks kuchenny",
            "Balkon z widokiem na miasto",
            "Prywatna łazienka",
            "2 oddzielne pokoje (Salon + Sypialnia)",
            "Ekspres do kawy",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Lodówka",
            "Płyta kuchenna",
            "Kuchenka mikrofalowa",
            "Przybory kuchenne",
            "Stół",
            "Krzesełko dla dzieci",
            "Sofa rozkładana",
            "Szafa lub garderoba",
            "Suszarka do włosów",
            "Ręczniki i Pościel"
        ],
        images: [
            "/images/apt-suite-1.jpg",
            "/images/apt-suite-2.jpg",
            "/images/apt-suite-3.jpg",
            "/images/about.jpg",
            "/images/apt-suite-4.jpg",
            "/images/apt-suite-5.jpg",
            "/images/apt-suite-6.jpg",
            "/images/apt-suite-7.jpg",
            "/images/apt-suite-8.jpg",
            "/images/apt-suite-9.jpg",
            "/images/apt-suite-10.jpg",
            "/images/apt-suite-11.jpg",
            "/images/apt-suite-12.jpg"
        ]
    },
    {
        id: "family-suite",
        name: "Rodzinny apartament typu Suite",
        type: "Family",
        capacity: "4-6 Osób",
        size: "45 m²",
        bed: "2x Pojedyncze + 2x Sofa",
        price: "80-130",
        desc: "Idealny wybór dla większej rodziny. Ten apartament oferuje oddzielną sypialnię z dwoma łóżkami pojedynczymi i rozkładaną sofą, a także przestronny salon z kolejną sofą. Do dyspozycji gości jest w pełni wyposażony aneks kuchenny, prywatna łazienka oraz balkon z widokiem na miasto.",
        features: [
            "Prywatny aneks kuchenny",
            "Balkon z widokiem",
            "Prywatna łazienka",
            "2 pokoje",
            "Ekspres do kawy",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Lodówka",
            "Płyta kuchenna",
            "Kuchenka mikrofalowa",
            "Stół",
            "Krzesełko dla dzieci",
            "2 rozkładane sofy",
            "Szafa"
        ],
        images: [
            "/images/apt-family-1.jpg",
            "/images/apt-family-2.jpg",
            "/images/apt-family-3.jpg",
            "/images/apt-family-4.jpg",
            "/images/apt-family-5.jpg",
            "/images/apt-family-6.jpg",
            "/images/apt-family-7.jpg",
            "/images/apt-family-8.jpg"
        ]
    },
    {
        id: "studio-mountain",
        name: "Studio z widokiem na góry",
        type: "Studio",
        capacity: "4-5 Osób",
        size: "40 m²",
        bed: "2x Poj. + 1x Podwójne + Sofa",
        price: "80-130",
        desc: "Przytulne studio na wyłączność o powierzchni 40 m² z malowniczym widokiem na góry. Otwarta przestrzeń łączy część sypialnianą, wypoczynkową oraz w pełni wyposażony aneks kuchenny. To doskonała propozycja dla osób ceniących integrację i górski klimat drewnianego wykończenia.",
        features: [
            "Widok na góry",
            "Prywatny aneks kuchenny",
            "Balkon",
            "Prywatna łazienka",
            "Część wypoczynkowa",
            "Ekspres do kawy",
            "Telewizor z płaskim ekranem",
            "Bezpłatne Wi-Fi",
            "Lodówka",
            "Płyta kuchenna",
            "Kuchenka mikrofalowa",
            "Stół"
        ],
        images: [
            "/images/apt-family-3.jpg",
            "/images/apt-family-4.jpg",
            "/images/apt-family-5.jpg",
            "/images/apt-family-6.jpg",
            "/images/apt-family-7.jpg",
            "/images/apt-family-8.jpg",
            "/images/apt-family-1.jpg",
            "/images/apt-family-2.jpg"
        ]
    }
];
