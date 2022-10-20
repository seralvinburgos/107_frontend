import { useState } from "react";
import "./wishList.css";
import { motion } from "framer-motion";

const WishList = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    const addToList = () => {
        let copy = [...list]; 
        copy.push(text);
        setList(copy);
        setText("");
    }
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="wish-list">
            <div className="container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top-1 position-relative col-12 shadow">
                        <img src="./images/back8.jpg" className="img-fluid opacity-75" alt="back4" />
                            <div className="top_2 position-absolute top-0 start-25 ms-5 mt-4">
                                <p className="title">Wish List</p>
                            </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container col-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter item here" aria-label="Enter item here" aria-describedby="button-addon2" onChange={handleTextChange} value = {text}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToList}>Add</button>
                </div>

                <ul className="list-group">
                    {list.map(t => <li className="list-group-item" key={t}>{t}</li>)}
                </ul>
            </div>
            <div className="bottom-extra">

            </div>
        </motion.div>
    )
}

export default WishList;