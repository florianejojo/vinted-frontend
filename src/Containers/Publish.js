import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [picture, setPicture] = useState();
    // const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (
                !title ||
                !price ||
                !description ||
                !condition ||
                !city ||
                !brand ||
                !size ||
                !color
            ) {
                alert("Please fill out all required fields");
            } else if (isNaN(price)) {
                alert("Wrong price");
            } else if (!picture) {
                alert("No picture uploaded");
            } else {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("condition", condition);
                formData.append("city", city);
                formData.append("brand", brand);
                formData.append("size", size);
                formData.append("color", color);
                formData.append("picture", picture);
                console.log(formData);
                const response = await axios.post(
                    "https://vintedreplica.herokuapp.com/offer/publish",
                    formData,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                );
                // if (error) {
                //     console.log(error);
                //     alert(error);
                // }

                history.push(`/offer/${response.data._id}`);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            {/* {error ? (
                (setError(""), alert(error))
            ) : ( */}
            <form onSubmit={handleSubmit} className="publish">
                <h2>Vends un article</h2>
                <input
                    type="text"
                    placeholder="Titre"
                    onChange={(event) => {
                        setTitle(event.target.value);
                        console.log(title);
                    }}
                />
                <textarea
                    id="desc"
                    type="text"
                    placeholder="Décris ton article"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Prix"
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Etat"
                    onChange={(event) => {
                        setCondition(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Ville"
                    onChange={(event) => {
                        setCity(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Marque"
                    onChange={(event) => {
                        setBrand(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Taille"
                    onChange={(event) => {
                        setSize(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Couleur"
                    onChange={(event) => {
                        setColor(event.target.value);
                    }}
                />
                <p>Ajouter une photo : </p>
                <input
                    id="fileInput"
                    type="file"
                    onChange={(event) => {
                        setPicture(event.target.files[0]);
                    }}
                />
                <button type="submit">Ajouter</button>
            </form>
            {/* )} */}
        </div>
    );
};

export default Publish;
