import { useTranslation } from 'react-i18next';
import classes from './AboutPage.module.scss';

export const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div className={classes.block}>
            {t('Это блок')}
        </div>
    );
};

export default AboutPage;
