import Back from "../common/back/back"
import OnlineCourses from "./onlineCourses"

function CourseHome(){
    return (
        <div>
            <Back title="Explore Course" />
            <OnlineCourses title={true} />
        </div>
    )
}export default CourseHome