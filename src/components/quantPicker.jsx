import { useState } from "react";
import "./quantPicker.css"

const QuantPicker = (props) => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
    };

    const decrease = () => {
        if (quantity !== 1){
        let value = quantity - 1;
        setQuantity(value);
        props.onChange(value);
        }
    };

    return(
        <div className="quantPicker">
            <button className="btn btn-sm btn-secondary" onClick={increase}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-secondary" disabled={quantity === 1} onClick={decrease}>-</button>
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