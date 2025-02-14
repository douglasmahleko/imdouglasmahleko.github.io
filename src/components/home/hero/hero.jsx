import { FaLongArrowAltRight } from "react-icons/fa";
import Title from "../../common/title/title";

function Hero(){
    return(
        <div>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle="Hello!!!" title="Welcome To My Yard" />
                        <div>
                        <p>
                            My name is Douglas Mahleko a Software Developer mainly with Reactjs, React Native,SQL, PHP and Block-chain using Motoko and Typescript on <a href="internetcomputer.org">Internet Computer</a>
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin">

            </div>
        </div>
    )

}
export default Hero