import "./footer.css";



function Footer() {
    return (
        <div className="footer container-fluid d-flex flex-row">
            <div className="left_side">
                <h6>quick links</h6>
                <br />
                <p>Catalog</p>
                <p>Wish List</p>
                <p>About</p>
                <p>Administrator</p>
            </div>
            <div className="middle-sec">
                <h6>sign up and save</h6>
                <br />
                <br />
                <br />
                <p>Subscribe for special offers and deals.</p>
                <div className="subscribe form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
            </div>
            <div className="name">
                <p>Alvin Burgos</p>
            </div>
        </div>


    );
}


export default Footer;