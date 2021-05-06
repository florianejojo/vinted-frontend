// import { Link } from "react-router-dom";
// import Signup from "../Containers/Signup";
const Header = () => {
    return (
        <div className="header container">
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
                alt="logo_vinted"
            />
            <input type="text" placeholder="Recherche des articles" />

            <button>Se connecter</button>
            <button>Vends tes articles</button>
        </div>
    );
};

export default Header;
