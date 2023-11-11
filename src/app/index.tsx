import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';
import { ErrorBoundary } from 'pages/ErrorBoundary';
import './styles/index.scss';
import { classNames } from 'helpers/classNames';
import { useTheme } from './providers/ThemeProvider';

const MainPage = lazy(() => import('pages/MainPage'));
const Block = lazy(() => import('pages/Block'));

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Link to='/'>Main Page</Link>
        <Link to='/block'>Block</Link>
        <button onClick={toggleTheme}>change theme</button>
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/block' element={<Block />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    </div>
}