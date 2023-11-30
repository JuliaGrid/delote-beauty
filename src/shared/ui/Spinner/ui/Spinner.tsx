import { FC } from 'helpers/interfaces';

interface SpinnerProps {
    
}

export const Spinner: FC<SpinnerProps> = (props) => {
    const {} = props;
    
    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}