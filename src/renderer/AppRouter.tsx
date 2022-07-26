import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App/App';
import About from './pages/About/About';
import { ThemeProvider } from '@mui/material';
import theme from './pages/theme';

export default function AppRouter() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
