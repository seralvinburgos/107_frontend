import { useEffect, useState } from "react";
import Product from "../components/product";
import "./catalog.css"
import Dataservice from '../services/dataService';

function Catalog() {
    const [products, setProducts] = useState([]);
    // use effect
    // to do something when the component is loaded
    useEffect(() => {
        let service = new Dataservice();
        let result = service.getCatalog();
        setProducts(result);
    }, []);

    return (
        <div className="catalog">
            <br />
            <h1>All donuts freshly-made everyday</h1>
            <br />
            <h5>We have {products.length} products waiting for you</h5>
            <br />
            <div className="list-container container d-flex justify-content-around flex-wrap mb-3">
                {products.map(prod => <div key={prod._id} className="row col-4 mb-3">
                <Product  data={prod} />
                </div> )}
            </div>
        </div>
    );
}

export default Catalog;



