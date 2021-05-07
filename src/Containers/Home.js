import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import backgroundImg from "../vinted_background.jpeg";
import blankAvatar from "../assets/blank_avatar.svg";

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(100);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(
                `https://vintedreplica.herokuapp.com/offers?page=${page}&limit=${limit}`
            );
            setData(response.data);
            setIsLoading(false);
        };
        fetchdata();
    }, [page, limit]);

    return isLoading ? (
        "is Loading"
    ) : (
        <div>
            <div id="preSection">
                <img src={backgroundImg} alt="backgroundImg" />

                <div className="insert">
                    <h2>Prêts à faire du tri dans vos placards ?</h2>
                    <button>Commencer à vendre</button>
                </div>
            </div>

            <div className="container">
                <button
                    onClick={() => {
                        if (page < 1) setPage(page - 1);
                    }}
                >
                    Page précédente
                </button>{" "}
                <span>{page}</span>
                <button
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    page suivante
                </button>
                <button
                    onClick={() => {
                        setLimit(2);
                        setPage(1);
                    }}
                >
                    2 articles par page
                </button>
                <button
                    onClick={() => {
                        setLimit(10);
                        setPage(1);
                    }}
                >
                    10 articles par page
                </button>
            </div>

            <div id="offers" className="container">
                {data.map((elem, index) => {
                    return (
                        <Link to={`/offer/${elem._id}`} key={index}>
                            <div className="user">
                                <img
                                    className="avatar"
                                    src={blankAvatar}
                                    alt="blankAvatar"
                                />
                                <p className="userName">
                                    {elem.owner.account.username}
                                </p>
                            </div>
                            <img
                                id="itemImg"
                                src={elem.product_image.secure_url}
                                alt="Item_image"
                            />
                            <p>{elem.product_price} Euros</p>
                            <p>Taille</p>
                            <p>Marque</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
