import { classNames } from 'helpers/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/router/config';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    onToggleSidebar?: () => void
}

export const Navbar = (props: NavbarProps) => {
    const { className, onToggleSidebar } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={RoutePath.main}>Main Page</AppLink>
            <AppLink to={RoutePath.about}>About</AppLink>

            <button onClick={onToggleSidebar}>toggle</button>

        </div>
    );
};
