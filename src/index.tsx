import ReactDOM from 'react-dom';
import { App } from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/ThemeProvider';
import ErrorBoundary from 'pages/ErrorBoundary';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from './app/i18n/config';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
