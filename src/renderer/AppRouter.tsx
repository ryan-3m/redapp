import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import About from './components/About/About';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<App />} />
            </Routes>
        </Router>
    );
}
