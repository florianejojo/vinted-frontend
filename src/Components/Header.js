const Header = ({ token, setCookie, setSignupModal, setLoginModal }) => {
    return (
        <div>
            <div className={`header container`}>
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
                    alt="logo_vinted"
                />

                <input type="text" placeholder="Rechercher des articles" />

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

                <button className="sell">Vends tes articles</button>
            </div>
            <p className="line"></p>
        </div>
    );
};

export default Header;
