import "./productInCart.css"


const ProductInCart = (props) => {

    const getTotal = () => {
        return (props.data.price * props.data.quantity);
    };

    return (
        <div className="cartCard container shadow mb-2">
            <div className="cartCardSect d-flex align-items-center gap-1">
                <div className="imageSect col">
                    <img src={"/images/" + props.data.image} className="card-img-top" alt="..."/>
                </div>
                <div className="titleCat col-4 text-center mt-3">
                    <h5>{props.data.title}</h5>
                    <p>{props.data.category}</p>
                </div>
                <div className="priceSection col text-center">
                    <h6>Price</h6>
                    <label>{props.data.price}</label>
                </div> 
                <div className="quantitySection col text-center"> 
                    <h6>Qty</h6>
                    <label>{props.data.quantity}</label>
                </div>
                <div className="totalSection col text-center"> 
                    <h6>Product Total</h6>
                    <label>{getTotal()}</label>
                </div>    
                <div className="cartRemoveBtn">
                <button className="btn btn-outline-danger btn-sm shadow ms-4 rounded-0">Remove</button>
                </div>
            </div>
        </div>
    )
};

export default ProductInCart;