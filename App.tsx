
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problem from './pages/Problem';
import ProvenorStandard from './pages/ProvenorStandard';
import AlignmentVerification from './pages/AlignmentVerification';
import VerificationTrust from './pages/VerificationTrust';
import WhoItsFor from './pages/WhoItsFor';
import Ecosystem from './pages/Ecosystem';
import GradiumOS from './pages/GradiumOS';
import About from './pages/About';
import Partner from './pages/Partner';
import Impact from './pages/Impact';
import Voices from './pages/Voices';
import Perspectives from './pages/Perspectives';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main className="main-content" style={{ flexGrow: 1, paddingTop: '112px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/the-provenor-standard" element={<ProvenorStandard />} />
            <Route path="/alignment-verification" element={<AlignmentVerification />} />
            <Route path="/verification-trust" element={<VerificationTrust />} />
            <Route path="/who-its-for" element={<WhoItsFor />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/gradium-os" element={<GradiumOS />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/voices" element={<Voices />} />
            <Route path="/perspectives" element={<Perspectives />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <style>{`
        @media (max-width: 768px) {
          .main-content { paddingTop: 80px !important; }
        }
      `}</style>
    </Router>
  );
};

export default App;
