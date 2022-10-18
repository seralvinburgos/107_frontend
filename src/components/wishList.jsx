import { useState } from "react";


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
        <div className="container col-6">
            <h4>Wish List</h4>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter item here" aria-label="Enter item here" aria-describedby="button-addon2" onChange={handleTextChange} value = {text}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addToList}>Add</button>
            </div>

            <ul className="list-group">
                {list.map(t => <li className="list-group-item" key={t}>{t}</li>)}
            </ul>
        </div>
    )
}

export default WishList;