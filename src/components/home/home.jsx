import AboutCard from "../about/aboutCard"
import Contact from "../contact/contact"
import Team from "../team/team"
import HBlog from "./hBlog"
import Hero from "./hero/hero"
import "./hero/hero.css"
import CourseHome from '../allCourses/courseHome';
function Home(){
    return(
        <div>
            <AboutCard />
            <CourseHome />
            <Team />
            <HBlog />
            <Contact />
        </div>
    )

}
export default Home