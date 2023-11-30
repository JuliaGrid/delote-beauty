import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

export const LangSwitcher: FC = () => {
    const { i18n } = useTranslation('about');

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <button onClick={toggle} className={classNames(cls.LangSwitcher)}>toggle lang</button>
    );
};
