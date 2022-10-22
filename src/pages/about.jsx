import "./about.css";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="about">
            <div className="container-fluid text-center mt-3">
                <div className="d-flex flex-row admin-top mx-auto">
                    <div className="top-1 position-relative col-12">
                        <img src="./images/back4.jpg" className="img-fluid opacity-75" alt="back4" />
                            <div className="top_2 position-absolute top-50 start-50 col-6">
                                <p className="title">About</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="about_desc">
                <br />
                <br />
                <h2>The DonutSHOP story</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate fugit blanditiis odio atque earum. Quasi iusto nostrum nisi. Est aut nisi molestiae vel perspiciatis velit, dignissimos iusto odit, veniam consectetur nulla commodi! Voluptatem deleniti quam soluta dicta in quaerat.</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et exercitationem eum earum aliquid? Nobis animi vel dolorem ut id iusto, atque voluptatem consequatur, vitae eligendi molestiae iste officia temporibus mollitia eveniet error beatae quos consectetur, numquam quia. Deleniti, praesentium ex eligendi consequuntur voluptatum qui aperiam explicabo cupiditate enim sapiente facere fugiat odio porro hic quas unde laborum minus aliquam numquam commodi! Ipsum, necessitatibus nihil. Maxime ea recusandae odit, vero autem ex sint et, nesciunt tempora velit exercitationem a deserunt!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, exercitationem sint quasi ut nulla odit ipsa nisi quisquam eos corrupti deleniti ea illo assumenda eligendi, eveniet harum eius repudiandae cupiditate soluta beatae architecto. Distinctio cumque omnis possimus in. Eveniet, vitae.
                </p>
            </div>
        </motion.div>
    );
};

export default About;