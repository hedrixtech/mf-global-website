import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Subscription from './pages/Subscription';
import './index.css';
import Pay from './pages/pay';
import StatusPage from './pages/Status';
import Partners from './pages/Partners';
import PartnershipPlans from './pages/PartnershipPlans';
import PartnershipPolicy from './pages/PartnershipPolicy';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/plans" element={<Subscription />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/plans" element={<PartnershipPlans />} />
        <Route path="/partners/policy" element={<PartnershipPolicy />} />

      </Routes>
    </Router>
  );
}

export default App;