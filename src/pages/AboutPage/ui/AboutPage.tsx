import classes from './AboutPage.module.scss'
import {useTranslation} from "react-i18next";

export const AboutPage = () => {
    const {t, i18n} = useTranslation('about');

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return <div className={classes.block}>
        <button onClick={toggle}>toggle lang</button>
        {t('Это блок')}
        dfsd
    </div>
}

export default AboutPage