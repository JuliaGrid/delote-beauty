import './styles/index.scss';
import { classNames } from 'helpers/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Suspense, useState } from 'react';
import { AppRouter } from './router';
import { useTheme } from './ThemeProvider';
import './i18n/config';
import cls from './App.module.scss';
import {Spinner} from "shared/ui/Spinner/ui/Spinner";

export function App() {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const onToggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Spinner />}>
                <div className={cls.wrapper}>
                    <div className={cls.main}>
                        <Navbar onToggleSidebar={onToggleSidebar} />
                        <AppRouter />
                    </div>
                    <div className={cls.sidebar}>
                        {collapsed && <Sidebar collapsed={collapsed} />}
                    </div>
                </div>
            </Suspense>
        </div>
    );
}
