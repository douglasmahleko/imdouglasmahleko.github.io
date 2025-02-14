import Title from "../common/title/title"
 import './about.css'
 import { FaPerson } from "react-icons/fa6";
 import { GiSkills } from "react-icons/gi";
 import me from './dougy.jpg';

function AboutCard(){
    return(
        <div>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        <img className="img" src={me} alt="me" />
                    </div>
                    <div className="right row">
                            <Title subtitle="LEARN ABOUT ME" title="Personal Information" />
                        <div className="items">
                            <div className="item flexSB">
                                <div className="img">
                                    <FaPerson size={25} />
                                </div>
                                <div className="text">
                                    <h1 className="hd"> DOUGLAS MAHLEKO </h1>
                                    <span> Welcome Guys I am Douglas Web and mobile application developer with Block-chain background </span>
                                </div>
                            </div>
                            <div className="item flexSB">
                                <div className="img">
                                    <GiSkills size={25} />
                                </div>
                                <div className="text">
                                    <h1 className="hd"> My Skills </h1>
                                    <span> I am Software Developer focused mainly with ReactJs, React-Native, SQL, Python, Java, PHP and Block-chain using Motoko and Typescript on <a href="internetcomputer.org">Internet Computer</a> </span>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutCard