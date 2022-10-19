 import "./home.css";

 import {Link} from 'react-router-dom';

 const Home = () => {
   return (
      <div className="container-fluid">
         <div className="top_main container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top-1 position-relative col-12 shadow">
                        <img src="./images/back3.jpg" className="donut_back img-fluid" alt="back3" />
                            <div className="top_2 position-absolute top-0 start-50 mt-5">
                                <p className="title">Donut <span>SHOP</span></p>
                            </div>
                            <div className="top_3 position-absolute bottom-0 start-0 ms-5">
                                <p className="title">Freshly Made Everyday</p>
                            </div>
                    </div>
                </div>
         </div>
         <div className="aboutUs">
            <div className="container-fluid text-center mt-3">
               <div className="threePic d-flex flex-row mx-auto position-relative gap-1">
                  <div className="leftPic col-4 shadow rounded">
                     <img src="./images/stack6.jpg" alt="leftPic" />
                  </div>
                  <div className="middlePic col-3 mx-5 shadow rounded opacity-100">
                     <div className="middleAbout">
                        <h3>About Us</h3>
                     </div>
                     <div className="middleDate">
                        <h4>Making Donuts since 1981</h4>
                     </div>
                     <div className="middleDesc">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi mollitia possimus quam nesciunt fuga magni quis, non alias, ullam repellat nisi perferendis excepturi quas est?</p>
                     </div>
                  </div>
                  <div className="rightPic col-4 shadow rounded">
                     <img src="./images/stack5.jpg" alt="leftPic" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      
    );
   };
   // <img src="/images/donutBack.jpg" className="img-fluid rounded mx-auto" alt="" />

 export default Home;