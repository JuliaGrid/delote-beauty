import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    collapsed: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { collapsed } = props;

    return (
        <div 
            data-testid='Sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}
        >
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};
