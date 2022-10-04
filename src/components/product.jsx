
import "./product.css";
import QuantPicker from './quantPicker';

const Product = (props) => {
    return (
        <div className="col">
            <div className="card col-10 m-auto shadow">
                <img src={"/images/" + props.data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Total Price: {props.data.price}</li>
                        <li className="list-group-item m-auto"><QuantPicker/></li>
                        <a href="#" className="btn  col-6 m-auto my-2 shadow">Add</a>
                    </ul>
                </div>
            </div>
        </div>
    );
}; 

        
        
        
        
        
        
        
        
        
        
        
        
        
    


export default Product;