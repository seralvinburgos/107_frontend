import "./home.css";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

 
 const Home = () => {
   return (
      <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="body_page container-fluid">
         <div className="top_main container-xxl text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <motion.div 
                    className="top_1 position-relative col-12">
                        <img
                        src="./images/back10.jpg" className="donut_back img-fluid" alt="back3" />
                            <div className="top_2 position-absolute top-0 start-0 mt-5 ms-5">
                                <motion.p 
                                initial={{ y: -200 }}
                                animate={{ 
                                 scale: 1,
                                 y: 0,
                              }}
                                transition={{
                                 type: "spring",
                                 stiffness: 90,
                                 delay: 1
                               }}
                                className="title d-inline-flex" id="donutTitle">Donut  <span style={{'--i':'1'}}>S</span><span style={{'--i':'2'}}>H</span><span style={{'--i':'3'}}>O</span><span style={{'--i':'4'}}>P</span>
                                </motion.p>
                            </div>
                            <motion.div 
                            initial={{ y: -400 }}
                            animate={{
                              scale: 1,
                              y: 0
                            }}
                              transition={{
                                 type: "spring",
                                 stiffness: 100,
                                 delay: 1
                              }}
                            className="top_3 position-absolute bottom-50 start-50 ms-5 mt-4">
                                <p className="title">Freshly Made Everyday</p>
                            </motion.div>
                    </motion.div>
                </div>
         </div>
         <div className="aboutUs container-xxl">
            <div className="text-center mt-3">
               <div className="threePic container-fluid d-inline-flex flex-row justify-content-center mx-auto position-relative gap-3">
                  <div className="leftPic col-4">
                  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src="./images/back1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="./images/back2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="./images/back3.jpg" className="d-block w-100" alt="..." />
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
                  <div className="middlePic col-3 mx-5">
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
                  <div className="rightPic col-4">
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
         <br />
         <Link className="btn btn-lg btn-dark d-flex justify-content-center mx-auto" id="amazingBtn" to="/catalog">
                Check out our amazing Catalog
            </Link>
         <br />
         <div className="second_sec container-xxl d-flex justify-content-center mx-auto gap-2 mb-5">
            <div className="second_left">
               <img src="./images/test12.png" className="d-block w-100 h-100" alt="" />
            </div>
            <div className="second_right flex-wrap mx-auto my-auto gap-2">
               <div className="small_one">
                  <img src="./images/test5.png" className="d-block w-100 h-100" alt="second_right_one" />
               </div>
               <div className="small_two">
                  <img src="./images/test6.png" className="d-block w-100 h-100" alt="second_right_two" />
               </div>
               <div className="small_three">
                  <img src="./images/test9.png" className="d-block w-100 h-100" alt="second_right_three" />
               </div>
               <div className="small_four">
                  <img src="./images/test8.png" className="d-block w-100 h-100" alt="second_right_four" />
               </div>
            </div>
         </div>
         <br />
         <div className="third_section container-xxl d-flex justify-content-center mx-auto">
         <div className="third-sec d-inline-flex flex-row">
            <div className="third_left">
               <h5>nothing crazy</h5>
               <h2>just donuts</h2>
               <br />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis explicabo reiciendis vitae cupiditate laborum eos totam asperiores, debitis eius beatae.</p>
               <br />
               <Link className="btn btn-lg btn-dark" id="shopNowBtn" to="/catalog">
                Shop Now
            </Link>
            </div>
            <div className="third_right">
               <img src="./images/thirdsect.jpg" className="d-block w-100 h-100" alt="third_section_right" />
            </div>
         </div>
         </div>
      </motion.div>

      
    );
   };
   

 export default Home;