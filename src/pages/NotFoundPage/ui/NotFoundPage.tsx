import { classNames } from 'helpers/classNames';
import { FC } from 'helpers/interfaces';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {

}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {} = props;

    return (
        <div className={classNames(cls.NotFoundPage)}>
            not found
        </div>
    )
}

export default NotFoundPage;