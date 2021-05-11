import { useHistory, Link } from "react-router-dom";

const Header = ({ token, setCookie, setSignupModal, setLoginModal }) => {
    let history = useHistory();
    return (
        <div>
            <div className={`header container`}>
                <Link to="/">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
                        alt="logo_vinted"
                    />
                </Link>

                <input type="text" placeholder="Rechercher des articles" />

                {token ? (
                    <button onClick={() => setCookie("Token", null)}>
                        Se déconnecter
                    </button>
                ) : (
                    <span>
                        <button
                            className="signup"
                            onClick={() => {
                                setSignupModal(true);
                            }}
                        >
                            S'inscrire
                        </button>
                        <button
                            className="login"
                            onClick={() => {
                                setLoginModal(true);
                            }}
                        >
                            Se connecter
                        </button>
                    </span>
                )}

                <button
                    className="sell"
                    onClick={() => {
                        token && history.push("/publish");
                    }}
                >
                    Vends tes articles
                </button>
            </div>
            <p className="line"></p>
        </div>
    );
};

export default Header;
