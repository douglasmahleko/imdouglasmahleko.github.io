import './blog.css'
import { BlogData } from './blogData';
function BlogCard(){
    return(
        <div>
            <section className="blog padding">
                <section className="container grid2">
                    {
                        BlogData.map((vale) => (
                            <div className="items shadow">
                                <div className="img">
                                    <image>{vale.cover}</image>

                                </div>
                                <div className="text">
                                    <div className="admin flexSB">
                                    </div>
                                    <h1> {vale.title} </h1>
                                    <h3> {vale.desc} </h3>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </section>
        </div>
    )
}export default BlogCard