import { Link } from "react-router-dom";

const Header = ({ userConnected, setToken, signupModal, setSignupModal }) => {
    // const container = "container";
    return (
        <div className={`header container`}>
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
                alt="logo_vinted"
            />

            <input type="text" placeholder="Recherche des articles" />

            {userConnected ? (
                <button onClick={() => setToken(null)}>Se déconnecter</button>
            ) : (
                <span>
                    {/* <Link to="/Signup">S'inscrire</Link> */}
                    <button
                        onClick={() => {
                            setSignupModal(true);
                        }}
                    >
                        S'inscrire
                    </button>
                    <Link to="/Login">Se connecter</Link>
                </span>
            )}

            <button>Vends tes articles</button>
        </div>
    );
};

export default Header;
