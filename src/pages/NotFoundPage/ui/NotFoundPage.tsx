import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import cls from './NotFoundPage.module.scss';
import { t } from 'i18next';

const NotFoundPage: FC = () => {
    return (
        <div className={classNames(cls.NotFoundPage)}>
            {t('Not found')}
        </div>
    )
}

export default NotFoundPage;