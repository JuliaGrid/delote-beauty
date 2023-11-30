import { classNames } from "helpers/classNames"
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "helpers/interfaces";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    to: string;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children, to, theme = AppLinkTheme.PRIMARY, className, ...otherProps} = props;

    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}