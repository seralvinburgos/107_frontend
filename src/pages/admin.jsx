import "./admin.css";

const Admin = () => {
    return (
        <div className="container-fluid text-center mt-3">
            <div className="d-flex flex-row admin-top mx-auto">
                <div className="top-1 position-relative col-12 shadow">
                    <img src="./images/back2.jpg" className="img-fluid opacity-75" alt="back2" />
                        <div className="top-2 position-absolute top-50 start-50 col-4">
                            <p className="header fs-1 fw-bold">Administrator</p>
                        </div>
                </div>
              
            </div>
            <br />
            <div className="top row col-12 mx-auto gap-4">
                <div className="sec-header col border rounded fw-bold shadow">
                    <p class="fs-4">Products</p>
                </div>
                <div className="sec-header col border rounded fw-bold shadow">
                    <p class="fs-4">Discounts</p>
                </div>
            </div>
            <br />
            <div className="bottom row col-12 mx-auto rounded gap-4">
                <div className="sec-header col border rounded shadow">
                <p class="fs-5"></p>
                </div>
                <div className="sec-header col border rounded shadow">
                <p class="fs-5"></p>
                </div>
            </div>
            <div className="bottom-extra">

            </div>
        </div>

    );
};

export default Admin;