import './../blog/blog.css'
import { BlogData } from "../blog/blogData"
import Title from "../common/title/title"

function HBlog(){
    return(
        <div>
            <section className="blog">
                <div className="container">
                    <Title subtitle="My Projects" title="Including most recent" />
                    <div className="grid2">
                    {
                            BlogData.map((vale) => (
                                <div className="items shadow">
                                    <div className="img">
                                        <image>{vale.cover}</image>

                                    </div>
                                    <div className="text">

                                        <h1> <a href={vale.link} >{vale.title} </a> </h1>
                                        <h4> {vale.desc} </h4>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HBlog