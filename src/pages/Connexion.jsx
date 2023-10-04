import { NavLink } from "react-router-dom";

const Connexion = () => {
  return (
    <div className="connection">
      <div className="container">
        <h1>Se connecter en tant que</h1>
        <NavLink className="link" to={`/user/12/`}>
          Karl Dovineau
        </NavLink>

        <NavLink className="link" to={`/user/18/`}>
          Cecilia Ratorez
        </NavLink>
      </div>
    </div>
  );
};

export default Connexion;
