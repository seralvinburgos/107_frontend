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
            <div className="bottom-extra">

            </div>
        </motion.div>
    );
};

export default About;