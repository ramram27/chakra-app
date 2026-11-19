import {useState,useContext} from 'react'
import { UserContext } from '../context/UserContextlist'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    const [emailId,setEmailId] = useState("")
    const [password,setPassword] = useState("")
    const {login} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = () =>{
        const flag = login(emailId,password)

        if(flag) {
          navigate('/')
        } else{
            console.log("Invalid credential")
        }
    }

  return (
    <div >
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" 
                placeholder="Enter a email" 
                value={emailId}
                onChange={(e)=> setEmailId(e.target.value)} 
                />
            </div>
            <div>
                <input type="text" 
                placeholder="Enter a password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
            </div>

            <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default LoginPage