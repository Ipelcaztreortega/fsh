import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {Patients} from './pages/Patients/Patients';
import Appointments from './pages/Appointments/Appointments';
import MedicalRecords from './pages/MedicalRecords/MedicalRecords';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/patients' element={<Patients />}/>
          <Route path='/appointments' element={<Appointments />}/>
          <Route path='/records' element={<MedicalRecords />} />
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
