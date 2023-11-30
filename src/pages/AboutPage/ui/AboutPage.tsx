import classes from './AboutPage.module.scss'
import {useTranslation} from "react-i18next";

export const AboutPage = () => {
    const {t} = useTranslation('about');

    return <div className={classes.block}>
        {t('Это блок')}
        dfsd
    </div>
}

export default AboutPage