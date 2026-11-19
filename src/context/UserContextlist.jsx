import {createContext,useState} from 'react'

export const UserContext = createContext();

export function UserProvider({children}) {
const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'Guest'
  })
const [authenticated,setAuthenticated] = useState(()=>{
    return localStorage.getItem('loggedIn') === 'true'
})

const login = (emailId,password) =>{
    if(emailId === "rohit83033@gmail.com" && password === "12345") {
        setAuthenticated(true)
        localStorage.setItem('loggedIn', 'true')
        setUserName('Rohit Kumar')
        localStorage.setItem('userName', 'Rohit Kumar')
        return true
    }
    return false
}
const logout = () => {
    setAuthenticated("")
    setUserName("")
    localStorage.removeItem('userName')
    localStorage.removeItem('loggedIn')
}
    return (
     <UserContext.Provider value={{userName,login,authenticated,logout}}>
      {children}
     </UserContext.Provider>
    )
}