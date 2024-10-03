import { FC } from 'helpers/interfaces';

export const Spinner: FC = () => {
    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}