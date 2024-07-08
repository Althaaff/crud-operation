import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmplListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
<div className="App">
      React JS CRUD Operations 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmplListing/>}/>
      <Route path='/employee/create' element={<EmpCreate/>}/>
      <Route path='/employee/detail/:empid' element={<EmpDetail/>}/>
      <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
    </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
