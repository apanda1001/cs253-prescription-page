import React from 'react';
import Form from './Form'
import ReactDOM from 'react-dom';
import { useState } from "react";
import MedicineList from './MedicineList';
function App() {
  const arr = [
    {
        medicines: 'Crocin',
        tenure: '2 days',
        comments: 'Painkiller', 
        id: 1
    }
]
  return (
    <div className="App">
        <Form />
        

    </div>
    
  );
}

export default App;
