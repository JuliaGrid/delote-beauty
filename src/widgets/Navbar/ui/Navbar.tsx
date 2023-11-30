import { classNames } from "helpers/classNames"
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "app/router/config";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={RoutePath.main}>Main Page</AppLink>
            <AppLink to={RoutePath.about}>About</AppLink>

        </div>
    )
}
