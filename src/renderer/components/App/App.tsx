import icon from '../../../../assets/icon.svg';
import app_css from './App.module.css';

const App = () => {
    return (
        <div className={app_css.app}>
            <div className={app_css.Hello}>
                <img width="200px" alt="icon" src={icon} />
            </div>
            <h1>electron-react-boilerplate</h1>
            <div className={app_css.Hello}>
                <a
                    className={app_css.app}
                    href="/#/dasd"
                    // target="_blank"
                    rel="noreferrer"
                >
                    <button
                        className={app_css.app}
                        type="button">
                        About Page
                    </button>
                </a>
                <a
                    href="https://github.com/sponsors/electron-react-boilerplate"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button type="button">
                        <span role="img" aria-label="books">
                            🙏
                        </span>
                        Donate
                    </button>
                </a>
            </div>
        </div>
    );
};

export default App;
