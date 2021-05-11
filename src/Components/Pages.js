const Pages = ({ page, setPage, setLimit }) => {
    // cacher le bouton + quand nombre de page actuelle * limit

    // const [nbMaxPage, setNbMaxPage] = useState(Math.ceil(nbItems / limit));

    // console.log(nbMaxPage);

    return (
        <div className="container pages">
            <div>
                <button
                    onClick={() => {
                        if (page > 1) setPage(page - 1);
                    }}
                >
                    -
                </button>

                <span>Page {page}</span>

                <button
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    +
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        setLimit(2);
                        setPage(1);
                        // setNbMaxPage(Math.ceil(nbItems / 2));

                        // console.log(nbItems, nbMaxPage);
                    }}
                >
                    2 articles par page
                </button>
                <button
                    onClick={() => {
                        setLimit(10);
                        setPage(1);
                        // setNbMaxPage(Math.ceil(nbItems / 10));
                        // console.log(nbItems, nbMaxPage);
                    }}
                >
                    10 articles par page
                </button>
            </div>
        </div>
    );
};

export default Pages;
