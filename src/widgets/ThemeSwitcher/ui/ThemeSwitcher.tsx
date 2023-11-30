import { FC } from 'helpers/interfaces';
import { Theme, useTheme } from 'app/ThemeProvider';
import LightIcon from 'shared/assets/icons/lightTheme.svg';
import DarkIcon from 'shared/assets/icons/darkTheme.svg';
import { Button } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={cls.ThemeSwitcher} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
