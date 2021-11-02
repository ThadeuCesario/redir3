import {Redirect} from 'react-router-dom';

const Primeira = () => {
    return (
        <strong>
            <Redirect to="/segunda" />
        </strong>
    )
}

export default Primeira;