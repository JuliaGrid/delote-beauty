import { classNames } from 'helpers/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/router/config';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
    onToggleSidebar?: () => void
}

export const Navbar = (props: NavbarProps) => {
    const { t } = useTranslation('widgets');
    const { className, onToggleSidebar } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={RoutePath.main}>{t("NavBar.Main")}</AppLink>
            <AppLink to={RoutePath.about}>{t("NavBar.About")}</AppLink>

            <button onClick={onToggleSidebar}>{t("Toggle")}</button>

        </div>
    );
};
