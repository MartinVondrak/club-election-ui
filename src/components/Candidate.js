import {useParams} from "react-router";

function Candidate() {
    const {id} = useParams()
    return (<div>Kandidát {id}</div>)
}

export default Candidate