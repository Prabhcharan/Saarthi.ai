import './App.css';
import React from 'react'
import { Modal } from "./components/Modal";
import { useState } from 'react';
import Table from './components/Table'

const App = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = React.useState([]);

  return (
    <div className="App">
      {show && <div onClick={() => setShow(false)} className="back-drop"></div>}
      <div className="btn-container">
        <button onClick={() => setShow(true)} className="btn-openForm">
          New Employee
      </button>
      </div>

      {show && <Modal data={data} onChange={setData} show={show} close={() => setShow(false)} />}
      <Table data={data} onChange={setData} />
    </div>
  );
}

export default App;
