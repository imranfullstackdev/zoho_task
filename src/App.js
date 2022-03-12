import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Contact from './Component/Contact';
import VerF from "./Component/VerF";
import {BrowserRouter,Routes,Route, } from 'react-router-dom'
import './App.css'

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignIn/>}/>
    </Routes>
    <Routes>
    <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    <Routes>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Routes>
    <Route path='/VerF' element={<VerF/>}/>
    </Routes>
  
  </BrowserRouter>
  </>
  );
}

export default App;
