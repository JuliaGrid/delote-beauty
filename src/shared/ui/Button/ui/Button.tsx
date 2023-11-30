import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children, className, theme = ButtonTheme.CLEAR, ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
