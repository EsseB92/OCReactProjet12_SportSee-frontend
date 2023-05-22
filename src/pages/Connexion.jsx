import { NavLink } from 'react-router-dom';

const Connexion = () => {
    return (
        <>
            <p>Se connecter en tant que</p>
            <NavLink to={`/user/12/`}>Karl Dovineau</NavLink>
            <br />
            <NavLink to={`/user/18/`}>Cecilia Ratorez</NavLink>
        </>
    );
};

export default Connexion;
