import { FC } from 'helpers/interfaces';
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/lightTheme.svg'
import DarkIcon from 'shared/assets/icons/darkTheme.svg'
import {Button} from "shared/ui/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
   const { theme, toggleTheme } = useTheme();

    return (
        <Button className={cls.ThemeSwitcher} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
}