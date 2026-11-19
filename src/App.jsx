import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import NavBar from './component/Navbar'
import Home from './pages/Home'
import StudentListpage from './pages/StudentList'
import About from './pages/About'
import Overview from './pages/Overview';
import Settings from './pages/Settings';
import { UserProvider } from './context/UserContextlist'
import Loginpage from './pages/LoginPage'
import ProtectedRoute from './component/ProtectedRoute'


function App() {
  return (
  <UserProvider>
  <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path='/login' element={<Loginpage />} />
   <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
   <Route path='/student-list' element={<ProtectedRoute> <StudentListpage /> </ProtectedRoute>} />
   <Route path='/about' element={<ProtectedRoute> <About /> </ProtectedRoute>} />
   <Route path='/overview' element={<ProtectedRoute> <Overview /> </ProtectedRoute>} />
   <Route path='/setting' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
  </Routes>
  </BrowserRouter>
  </UserProvider>
  )
}

export default App
