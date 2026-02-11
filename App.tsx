import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { Apartment } from './pages/Apartment';
import { Pricing } from './pages/Pricing';
import { Attractions } from './pages/Attractions';
import { Contact } from './pages/Contact';

import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokoje" element={<Rooms />} />
          <Route path="/apartament" element={<Apartment />} />
          <Route path="/cennik" element={<Pricing />} />
          <Route path="/atrakcje" element={<Attractions />} />
          {/* Okolica is functionally similar to Attractions, mapping to same component for now */}
          <Route path="/okolica" element={<Attractions />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;