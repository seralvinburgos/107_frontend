import "./footer.css";



function Footer() {
    return (
        <div className="footer fixed-bottom container-fluid">
            <div className="left_sid d-flex flex-row gap-4">
                <li>Home</li>
                <li>Catalog</li>
                <li>Wish List</li>
                <li>About</li>
            </div>
            <div className="middle-sec d-flex flex-row gap-4">
                <div className="signSect">
                <h6>sign up and save</h6>
                <p>Subscribe for special offers and deals.</p>
                </div>
                <div className="subscribe form-floating mb-3">
                    <input type="email" className="form-control subInput" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
            </div>
            <div className="name">
                <li>Alvin Burgos</li>
            </div>
        </div>


    );
}


export default Footer;