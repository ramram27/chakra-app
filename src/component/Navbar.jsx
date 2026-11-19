import {useContext} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import {UserContext} from '../context/UserContextlist'
import './navbar.css'

function NavBar() {
const {name,userName,authenticated,logout} = useContext(UserContext)
const navigate = useNavigate()
const LoggedOut = () =>{
 logout()
  navigate('/login')
}
    return (
        <header className='header'>
          <h2 className='logo'>Router app</h2>
          {
            authenticated ? 
            <>
            <nav>
           <NavLink to='/' >Home</NavLink>
           <NavLink to='/student-list'>Student List</NavLink>
           <NavLink to='/about'>About</NavLink>
           <NavLink to='/overview'>OverView</NavLink>
           <NavLink to='/setting'>Settings</NavLink>
          </nav>
          <p><span>{userName}</span>{name}</p>
          <button onClick={LoggedOut}>Logout</button>
         </>
            :
            <NavLink to='/login'>Login</NavLink>
          }
        </header>
    )
}

export default NavBar;