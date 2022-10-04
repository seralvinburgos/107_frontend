
import "./product.css";
import QuantPicker from './quantPicker';

const Product = () => {
    return (
        <div className="col">
            <div className="card col-10 m-auto">
                <img src="https://picsum.photos/180/200" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Total Price</li>
                        <li className="list-group-item m-auto"><QuantPicker/></li>
                        <a href="#" className="btn  col-6 m-auto my-2">Add</a>
                    </ul>
                </div>
            </div>
        </div>
    );
}; 

        
        
        
        
        
        
        
        
        
        
        
        
        
    


export default Product;