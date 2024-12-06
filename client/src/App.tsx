import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Navbar} from './components/Navbar/Navbar';
import {Patients} from './pages/Patients/Patients';
import './App.css'
import { Appointments } from './pages/Appointments/Appointments';
import { Doctors } from './pages/Doctors/Doctors';
import { MedicalRecords } from './pages/MedicalRecords/MedicalRecords';
import { Billings } from './pages/Billings/Billings';

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/patients' element={<Patients />}/>
          <Route path='/appointments' element={<Appointments />}/>
          <Route path='/doctors' element={<Doctors />}/>
          <Route path='/medical-records' element={<MedicalRecords />}/>
          <Route path='/billings' element={<Billings />} />
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
