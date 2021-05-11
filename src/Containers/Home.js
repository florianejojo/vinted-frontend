import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import backgroundImg from "../vinted_background.jpeg";
import blankAvatar from "../assets/blank_avatar.svg";

import Pages from "../Components/Pages";

const Home = ({ token, setLoginModal }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(100);
    const history = useHistory();
    // const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(
                `https://vintedreplica.herokuapp.com/offers?page=${page}&limit=${limit}`
            );
            setData(response.data);
            // setMaxPage(data.length - Number(page) * Number(limit));

            setIsLoading(false);
        };
        fetchdata();
    }, [page, limit, data]);

    const startSelling = () => {
        if (token) {
            history.push("/publish");
        } else {
            setLoginModal(true);
        }
    };

    return isLoading ? (
        "is Loading"
    ) : (
        <div>
            <div id="preSection">
                <img src={backgroundImg} alt="backgroundImg" />

                <div className="insert">
                    <h2>Prêts à faire du tri dans vos placards ?</h2>
                    <button onClick={startSelling}>Commencer à vendre</button>
                </div>
            </div>
            <Pages
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                // maxPage={maxPage}
            />
            <div id="offers" className="container">
                {data.map((elem, index) => {
                    return (
                        <div key={index}>
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
                            <Link to={`/offer/${elem._id}`}>
                                <img
                                    id="itemImg"
                                    src={elem.product_image.secure_url}
                                    alt="Item_image"
                                />
                            </Link>
                            <div className="description">
                                <p className="price"> {elem.product_price} €</p>
                                <p> {elem.product_details[1].TAILLE}</p>
                                <p>Marque : {elem.product_details[0].MARQUE}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
