import { useEffect, useState } from "react";
import Product from "../components/product";
import "./catalog.css";
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
            <div className="container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top-1 position-relative col-12 shadow">
                        <img src="./images/back7.jpg" className="img-fluid opacity-75" alt="back4" />
                            <div className="top_2 position-absolute top-50 start-50">
                                <p className="title">Freshly-Made Donuts</p>
                            </div>
                    </div>
                </div>
            </div>
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



