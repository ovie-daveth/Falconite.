import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom';
import './App.css';
import { Register, Login, Verify } from './components';
import { ToastContainer } from 'react-toastify'

function App() {
  // const [currentForm, setCurrentForm] = useState('register')

  // const toggleForm = (formName) => {
  //     setCurrentForm(formName);
  // }
  return (
    <div className="App">
        <ToastContainer theme='colored'></ToastContainer>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/verify' element={<Verify />}></Route>
        </Routes>
        </BrowserRouter>
        

      {/* {
        currentForm === 'register' ?  <Register onFormSwitch={toggleForm}/> : <Login onFormSwitch={toggleForm}/>
      } */}
      
      
    </div>
  );
}

export default App;
