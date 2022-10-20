import "./home.css";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

 
 const Home = () => {
   return (
      <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="container-fluid">
         <div className="top_main container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top_1 position-relative col-12 shadow rounded-top">
                        <img src="./images/back10.jpg" className="donut_back img-fluid" alt="back3" />
                            <div className="top_2 position-absolute top-0 start-0 mt-5 ms-5">
                                <motion.p 
                                animate={{ scale: 1 }}
                                initial={{ scale: 0.8 }}
                                transition={{
                                 type: "spring",
                                 delay: 1
                                 
                               }}
                                className="title d-inline-flex" id="donutTitle">Donut  <span style={{'--i':'1'}}>S</span><span style={{'--i':'2'}}>H</span><span style={{'--i':'3'}}>O</span><span style={{'--i':'4'}}>P</span>
                                </motion.p>
                            </div>
                            <div className="top_3 position-absolute bottom-50 start-50 ms-5 mt-4">
                                <p className="title">Freshly Made Everyday</p>
                            </div>
                    </div>
                </div>
         </div>
         <div className="aboutUs">
            <div className="text-center mt-3">
               <div className="threePic container-fluid d-inline-flex flex-row justify-content-center mx-auto position-relative gap-1">
                  <div className="leftPic col-4 shadow rounded">
                     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src="./images/back1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="./images/back2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="./images/stack3.jpg" className="d-block w-100" alt="..." />
                        </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Next</span>
                     </button>
                     </div>
                  </div>
                  <div className="middlePic col-3 mx-5 shadow rounded-bottom">
                     <div className="middleAbout">
                        <h3>About Us</h3>
                     </div>
                     <div className="middleDate">
                        <h4>Making Donuts since 1981</h4>
                     </div>
                     <div className="middleDesc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum dicta praesentium minima, ut officiis culpa est ab expedita ea?</p>
                     </div>
                  </div>
                  <div className="rightPic col-4 shadow rounded-end">
                  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src="./images/back13.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="./images/back14.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="./images/back15.jpg" className="d-block w-100" alt="..." />
                        </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                     </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <br />
         <Link className="btn btn-lg btn-dark" to="/catalog">
                Check out our amazing Catalog
            </Link>
      </motion.div>

      
    );
   };
   

 export default Home;