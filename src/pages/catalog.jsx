import Product from "../components/product";
import "./catalog.css"

function Catalog() {
    return(
        <div className="catalog">
            <br />
            <h1>Check our amazing catalog of products</h1>
            <br />
            <div className="list-container container d-flex justify-content-around flex-wrap mb-3">
                <div className="row col-4 mb-3">
                <Product />
                </div>
                <div className="row col-4 mb-3">
                <Product />
                </div>
                <div className="row col-4 mb-3">
                <Product />
                </div>
                <div className="row col-4 mb-3">
                <Product />
                </div>
                <div className="row col-4 mb-3">
                <Product />
                </div>
                <div className="row col-4 mb-3">
                <Product />
                </div>
            </div>
        </div>
    );
}

export default Catalog;



