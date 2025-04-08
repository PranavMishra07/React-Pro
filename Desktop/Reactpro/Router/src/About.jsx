import { useNavigate } from "react-router-dom"


const About = () => {
    const navigator = useNavigate()
    function go() {
        navigator("/sign")
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={go}>Go to Sign </button>
        </div>
    )
}

export default About
