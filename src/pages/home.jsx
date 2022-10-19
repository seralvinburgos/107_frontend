import "./home.css";


 
 const Home = () => {
   return (
      <div className="container-fluid">
         <div className="top_main container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top_1 position-relative col-12 shadow rounded-top">
                        <img src="./images/back10.jpg" className="donut_back img-fluid" alt="back3" />
                            <div className="top_2 position-absolute top-0 start-0 mt-5 ms-5">
                                <p className="title d-inline-flex">Donut  <span style={{'--i':'1'}}>S</span><span style={{'--i':'2'}}>H</span><span style={{'--i':'3'}}>O</span><span style={{'--i':'4'}}>P</span>
                                </p>
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
                     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img src="./images/back1.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="./images/back2.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="./images/stack3.jpg" class="d-block w-100" alt="..." />
                        </div>
                     </div>
                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                     </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
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
                  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img src="./images/back13.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="./images/back14.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="./images/back15.jpg" class="d-block w-100" alt="..." />
                        </div>
                     </div>
                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                     </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                     </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      
    );
   };
   

 export default Home;