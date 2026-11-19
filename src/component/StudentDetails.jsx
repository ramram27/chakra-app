import { useContext } from "react";
import { UserContext } from "../context/UserContextlist";

function StudentDetails() {
    const {name} = useContext(UserContext)
    return (
        <div>
            <h2>Student Details</h2>
            <h2 style={{color:"red"}}>{name}</h2>
            <ul>
                <li>Name : Rahul</li>
                <li>Roll no: 042</li>
                <li>email: Rk12@gmail.com</li>
            </ul>
        </div>
    )
}
export default StudentDetails;