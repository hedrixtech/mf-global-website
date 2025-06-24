import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Subscription from './pages/Subscription';
import './index.css';
import Pay from './pages/pay';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/plans" element={<Subscription />} />
        <Route path="/pay" element={<Pay />} />

      </Routes>
    </Router>
  );
}

export default App;