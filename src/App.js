import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientAdd from './components/PatientAdd';
import PatientView from './components/PatientView';
import PatientSearch from './components/PatientSearch';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PatientAdd/>} />
        <Route path='/view' element={<PatientView/>} />
        <Route path='/search' element={<PatientSearch/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
