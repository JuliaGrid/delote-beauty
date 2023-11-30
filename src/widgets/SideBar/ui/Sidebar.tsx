import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import cls from './Sidebar.module.scss';
import {useState} from "react";

interface SidebarProps {
    
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {} = props;
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed})}>
            <button onClick={onToggle}>toggle</button>
        </div>
    )
}