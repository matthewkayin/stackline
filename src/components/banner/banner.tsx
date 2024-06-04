import './banner.css'
import { ReactComponent as Logo } from '../../stackline_logo.svg';

export const Banner: React.FunctionComponent = () => {
    return (
        <div className={"banner"}>
            <Logo className={"banner-logo"} />
        </div>
    )
};