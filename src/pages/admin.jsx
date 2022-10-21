import "./admin.css";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Admin = () => {
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);


    

        const handleCouponChange = (e) => {
            const text = e.target.value;
            const name = e.target.name;

            let copy = {...coupon};
            copy[name] = text;
            setCoupon(copy);
        };

        const saveCoupon = () => {
            let copy = {...coupon};
            copy.discount = parseFloat(copy.discount);

            let couponList = [...allCoupons];
            couponList.push(copy);
            setAllCoupons(couponList);

            console.log(couponList);
        };

        const handleProductChange = (e) => {
            const text = e.target.value;
            const name = e.target.name;
           
    
            let copy = {...product};
            copy[name] = text;
            setProduct(copy);
        };

        const saveProduct = () => {
            let copy = {...product};
            copy.price = parseFloat(copy.price);

            let productList = [...allProducts];
            productList.push(copy);
            setAllProducts(productList);
        };
    

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container-fluid text-center mt-3">
            <div className="d-flex flex-row admin-top mx-auto">
                <div className="top_1 position-relative col-12">
                    <img src="./images/back2.jpg" className="img-fluid opacity-75" alt="back2" />
                        <div className="top_2 position-absolute top-50 start-50 col-4">
                            <p className="title">Administrator</p>
                        </div>
                </div>
              
            </div>
            <br />
            <div className="container-xl">
            <div className="topHeaders d-inline-flex flex-row col-12 mx-auto gap-2">
                <div className="sec-header col-6 border fw-bold mb-2">
                    <p className="fs-4 ">Products</p>
                </div>
                <div className="sec-header col-6 border fw-bold mb-2">
                    <p className="fs-4">Discounts</p>
                </div>
            </div>
           
            <div className="bottom d-inline-flex flex-row col-12 mx-auto rounded gap-2">
                <div className="sec-header col-6 d-flex flex-column border text-center">
                    <section className="sec-product d-flex flex-column  justify-content-center col-10 mx-auto">
                        <br />
                    <div className="input-group flex-nowrap product-control col">
                        <span className="input-group-text col-4" id="addon-wrapping">Title</span>
                        <input type="text" className="form-control" name="title" onChange={handleProductChange}  placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
                    </div>
                    <br />
                    <div className="input-group flex-nowrap product-control col">
                        <span className="input-group-text col-4" id="addon-wrapping">Price</span>
                        <input type="number" className="form-control" name="price" onChange={handleProductChange} placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
                    </div>
                    <br />
                    <div className="input-group flex-nowrap product-control col">
                        <span className="input-group-text col-4" id="addon-wrapping">Image</span>
                        <input type="text" className="form-control" name="image" onChange={handleProductChange} placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
                    </div>
                    <br />
                    <div className="input-group flex-nowrap product-control col">
                        <span className="input-group-text col-4" id="addon-wrapping">Category</span>
                        <input type="text" className="form-control" name="category" onChange={handleProductChange} placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
                    </div>
                    <br />
                    <div className="btn">
                        <button onClick={saveProduct} className="btn btn-dark" id="saveBtn">Save</button>
                    </div>
                    <br />
                    <ul>
                        {allProducts.map(p => <li key= {p.title}>{p.title} - ${p.price} - {p.category} - {p.image}</li>)}
                    </ul>

                    </section>
                </div>

                <div className="sec-header col-6 d-flex flex-column border">
                    <section className="sec-discount d-flex flex-column justify-content-center col-10 mx-auto">
                    <br />
                    <div className="input-group flex-nowrap my-control col">
                        <span className="input-group-text col-4" id="addon-wrapping">Code</span>
                        <input type="text" className="form-control" name="code" onChange={handleCouponChange} placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
                    </div>
                    <br />
                    <div className="input-group flex-nowrap my-control col">
                        <span className="input-group-text col-4" id="addon-wrapping">Discount</span>
                        <input type="number" className="form-control" name="discount" onChange={handleCouponChange} placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
                    </div>
                    <br />
                    <div className="btn">
                        <button onClick={saveCoupon} className="btn btn-dark" id="saveBtn">Save</button>
                    </div>

                    <ul>
                        {allCoupons.map(c => <li key= {c.code}>{c.code} - {c.discount}</li>)}
                    </ul>
                </section>
                </div>
            </div>
            </div>
            <div className="bottom-extra">
            
            </div>
        </motion.div>

    );
};

export default Admin;

/**
 * 
 * 1 - create a allCoupons array state var
 * 2 - on save, push the cop obj to the array
 *    (create a copy of the array, modify the copy, set the copy back.)   
 * 
 *  */
