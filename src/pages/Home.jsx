import {useNavigate} from 'react-router-dom'
import HomeComp from '../component/HomeCom';

function Homepage() {
    const nevigate = useNavigate();
    return (
        <div>
            <HomeComp /> 
            <button style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"10px",
                marginTop:"10px",
                marginLeft:"40%"
            }} onClick={()=> nevigate("/student-list")}>view student</button>
        </div>
    )
}
export default Homepage;