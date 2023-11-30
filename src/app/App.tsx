import './styles/index.scss';
import { classNames } from 'helpers/classNames';
import { useTheme } from './ThemeProvider';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Sidebar} from "widgets/SideBar";
import {Suspense} from "react";
import './i18n/config';

export const App = () => {
    const { theme } = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Suspense>
            <Navbar />
            <AppRouter />
            <ThemeSwitcher />
            <Sidebar />
        </Suspense>
    </div>
}