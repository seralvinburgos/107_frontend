import { useEffect, useState } from "react";
import Product from "../components/product";
import "./catalog.css";
import Dataservice from '../services/dataService';
import { motion } from 'framer-motion';

function Catalog() {
    const [products, setProducts] = useState([]);
    // use effect
    // to do something when the component is loaded
    useEffect( () => {
    loadData();   
    }, []);

    const loadData = async () => {
        let service = new Dataservice();
        let result = await service.getCatalog();
        setProducts(result);
    }

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="catalog">
            <div className="container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top-1 position-relative col-12">
                        <img src="./images/back12.jpg" className="img-fluid opacity-75" alt="back4" />
                            <div className="top_2 position-absolute top-50 start-50">
                                <p className="title">Freshly-Made</p>
                            </div>
                    </div>
                </div>
            </div>
            <br />
            <h5>We have {products.length} products waiting for you</h5>
            <br />
            <div className="list-container container-xxl d-flex flex-wrap justify-content-around mb-3">
                {products.map(prod => <div key={prod._id} className="row col mb-3">
                <Product  data={prod} />
                </div> )}
            </div>
        </motion.div>
    );
}

export default Catalog;



