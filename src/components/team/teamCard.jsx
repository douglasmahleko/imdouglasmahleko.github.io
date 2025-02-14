import { TeamData } from "./teamData"
import './team.css'
import Title from "../common/title/title"
function TeamCard({show}){
    return (
        <div>
            <section className="team padding">
                <Title subtitle="EMPLOYMENT" title="HISTORY" />
                <div className="container gridt">
                    {
                    TeamData.map((val) => (
                        <div className="items shadow">
                            <div className="details">
                                <h2> {val.name} </h2>
                                <p> {val.work} </p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        </div>
    )
}
export default TeamCard