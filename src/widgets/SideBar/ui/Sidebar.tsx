import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    collapsed: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {collapsed} = props;

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed})}>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    )
}