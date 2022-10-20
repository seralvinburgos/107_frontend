import { useState } from "react";
import "./product.css";
import QuantPicker from './quantPicker';

import {Link} from 'react-router-dom';

const Product = (props) => {

    const [quantity, setQuantity] = useState(1);
    const handleQuantChange = (qty) => {
        console.log("QuantPicker changed",qty);
        setQuantity(qty);
    };

    const getTotal=() => {
        const total = quantity*props.data.price;
        return total.toFixed(2);
    }

    return (
        <div className="col">
            <div className="card col m-auto" style={{'width':'16rem'}}>
                <img src={"/images/" + props.data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center priceEach">Price: ${props.data.price.toFixed(2)}</li>
                        <li className="list-group-item text-center totalPrice">Total: ${getTotal()}</li>
                        <li className="list-group-item m-auto"><QuantPicker onChange={handleQuantChange}/></li>
                        <Link to="#" type="button" className="btn btn-warning col-6 m-auto my-2">Add</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}; 

        
        
        
        
        
        
        
        
        
        
        
        
        
    


export default Product;