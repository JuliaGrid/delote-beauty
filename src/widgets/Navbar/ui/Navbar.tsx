import { classNames } from "helpers/classNames"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";

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
