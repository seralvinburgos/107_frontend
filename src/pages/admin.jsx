import "./admin.css";

const Admin = () => {
    return (
        <div className="container-fluid text-center mt-3">
            <div className="d-flex flex-row admin-top mx-auto">
                <div className="top_1 position-relative col-12 shadow">
                    <img src="./images/back2.jpg" className="img-fluid opacity-75" alt="back2" />
                        <div className="top_2 position-absolute top-50 start-50 col-4">
                            <p className="title">Administrator</p>
                        </div>
                </div>
              
            </div>
            <br />
            <div className="container-fluid">
            <div className="topHeaders d-inline-flex flex-row col-12 mx-auto gap-2">
                <div className="sec-header col-8 border rounded-top fw-bold mb-2">
                    <p class="fs-4 ">Products</p>
                </div>
                <div className="sec-header col-4 border rounded-top fw-bold mb-2">
                    <p class="fs-4">Discounts</p>
                </div>
            </div>
           
            <div className="bottom d-inline-flex flex-row col-12 mx-auto rounded gap-2">
                <div className="sec-header col-8 border text-center rounded-bottom">
                <p class="fs-5"></p>
                </div>
                <div className="sec-header col-4 border rounded-bottom">
                <p class="fs-5 "></p>
                </div>
            </div>
            </div>
            <div className="bottom-extra">

            </div>
        </div>

    );
};

export default Admin;