import React from 'react';
import './App.css';

// components import
import NavBar from './components/NavBar'
import Form from './components/Form'
import Invoices from './components/Invoices';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="flex">
        <Form/>
        <Invoices/>
      </div>
    </div>
  );
}

export default App;
