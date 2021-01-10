import {Link} from "react-router-dom";

function About() {
    return (
        <div>
            About
            <Link to="/login">Začít přihlášením</Link>
        </div>
    )
}

export default About