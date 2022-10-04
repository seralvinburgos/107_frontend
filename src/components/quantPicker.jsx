import { useState } from "react";
import "./quantPicker.css"

const QuantPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        let value = quantity + 1;
        setQuantity(value);
    };

    const decrease = () => {
        if (quantity !== 1){
        let value = quantity - 1;
        setQuantity(value);
        }
    };

    return(
        <div className="quantPicker">
            <button className="btn btn-sm btn-secondary shadow" onClick={increase}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-secondary shadow" disabled={quantity === 1} onClick={decrease}>-</button>
        </div>
    );
};

export default QuantPicker;




/*
create a Product component
render a QuantPicker inside that new component
render Product in Catalog
remove QuantPicker from Catalog
*/