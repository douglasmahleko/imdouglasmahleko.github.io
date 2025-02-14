import Back from "../common/back/back";
import './contact.css'
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Contact(){
    return(
        <div>
            <Back title="Contact Us" />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="right rowc">
                        <h1> Contact Me</h1>
                        <div className="items grid2c">
                            <div className="box">
                                <a href="linkedin.com/in/douglasmahleko">
                                    <h4> <FaLinkedin size={25} /> LinkedIn: </h4>
                                    <p>linkedin.com/in/douglasmahleko</p>
                                </a>
                            </div>
                            <div className="box">
                                <a href="github.com/douglasmahleko">
                                    <h4> <FaGithub size={25} /> Github: </h4>
                                    <p>github.com/douglasmahleko</p>
                                </a>
                            </div>
                            <div className="box">
                                <a href="mailto:douglasmahleko@gmail.com">
                                    <h4> <MdMarkEmailUnread size={25} /> EMAIL: </h4>
                                    <p>douglasmahleko@gmail.com</p>
                                </a>
                            </div>
                            <div className="box">
                                
                                    <h4> <IoCall size={25} /> PHONE: </h4>
                                    <p>+263776477847</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact