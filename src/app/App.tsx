import './styles/index.scss';
import { classNames } from 'helpers/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Sidebar} from "widgets/SideBar";

export const App = () => {
    const { theme } = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <ThemeSwitcher />
        <Sidebar />
        <AppRouter />
    </div>
}