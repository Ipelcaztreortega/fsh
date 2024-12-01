import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {Patients} from './pages/Patients/Patients';
import Appointments from './pages/Appointments/Appointments';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/patients' element={<Patients />}/>
          <Route path='/appointments' element={<Appointments />}/>
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
