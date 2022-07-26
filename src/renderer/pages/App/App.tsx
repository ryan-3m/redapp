import app_css from './App.module.css';
import { Frame } from '../components/Frame';

const App = () => {
    return (
        <div className={app_css.app}>
            <Frame>
                <h1>Hello World</h1>
            </Frame>
        </div>
    );
};

export default App;
