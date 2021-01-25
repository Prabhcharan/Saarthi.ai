import './App.css';
import {Modal} from "./components/Modal";
import Form from './components/Form'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false)

  const closeForm = () => setShow(false);

  return (
    <div className="App">
      { show ? <div onClick={closeForm} className="back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openForm">New Employee</button>
      <Modal show={show} close={closeForm} />
    </div>
  );
}

export default App;
