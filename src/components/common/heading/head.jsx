import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Head(){
    return(
        <div>
            <section className="head">
                <div className="container flexSB">
                    <div className="logo">
                        <h1>MAHLEKO</h1>
                        <span>DOUGLAS</span>

                    </div>
                    <div className="social">
                            <i className="ico"> <a href="linkedin.com/in/douglasmahleko"> <FaLinkedin size={35} /> </a> </i>
                            <i className="ico"> <a href="mailto:douglasmahleko@gmail.com"> <MdMarkEmailUnread size={35} /> </a> </i>
                            <i className="ico"> <a href=""> <IoCall size={35} /> </a> </i>
                            <i className="ico"> <a href="github.com/douglasmahleko"> <FaGithub size={35} /> </a> </i>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Head
