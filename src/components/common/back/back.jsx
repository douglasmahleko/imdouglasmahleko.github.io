import { useLocation } from "react-router-dom"


function Back({title}){
    const location = useLocation()
    return(
        <div>
            <section className="back">
                <h2> Home / {location.pathname.split("/")[1]}</h2>
            </section>
            <div className="margin">
                
            </div>
        </div>
    )
}
export default Back