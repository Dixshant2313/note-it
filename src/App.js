import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
 const [alert, setAlert] = useState(null) 

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type,
  });
  setTimeout(() => {
    setAlert(null);
  }, 3000);
};

  return (
  <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" id="home" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" id="about" element={<About/>} />
          <Route exact path="/login" id="login" element={<Login  showAlert={showAlert}/>} />
          <Route exact path="/signup" id="signup" element={<Signup showAlert={showAlert}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </NoteState>
  </>
  );
}

export default App;
