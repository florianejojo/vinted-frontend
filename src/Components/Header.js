// import { Link } from "react-router-dom";

const Header = ({ token, setCookie, setSignupModal, setLoginModal }) => {
    // const container = "container";
    return (
        <div className={`header container`}>
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
                alt="logo_vinted"
            />

            <input type="text" placeholder="Recherche des articles" />

            {token ? (
                <button onClick={() => setCookie("Token", null)}>
                    Se déconnecter
                </button>
            ) : (
                <span>
                    <button
                        onClick={() => {
                            setSignupModal(true);
                        }}
                    >
                        S'inscrire
                    </button>
                    <button
                        onClick={() => {
                            setLoginModal(true);
                        }}
                    >
                        Se connecter
                    </button>
                </span>
            )}

            <button>Vends tes articles</button>
        </div>
    );
};

export default Header;
