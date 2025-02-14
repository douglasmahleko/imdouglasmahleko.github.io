import Title from "../common/title/title"
import { Online } from "./online"
import './course.css'

function OnlineCourses({title}){
    return(
        <div>
            <section className="online">
                <div className="container">
                    <div className="pushLeft" >
                        <Title subtitle="Skills" title="My Major Skills" />
                    </div>
                    <div className="content grid3o">
                        {
                            Online.map((val) => (
                                <div className="box">
                                    <div className="img">
                                        <i>{val.cover}</i>
                                    </div>
                                    <h1> {val.courseName} </h1>
                                    <span> {val.course} </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default OnlineCourses