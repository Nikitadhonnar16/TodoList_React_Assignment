import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListView from './Components/ListView';
import AddTask from './Components/AddTask';
import todoListData from './Components/assets/data/todoListData.json';

function App() {


 

  return (
    <>
       <ListView  />
    </>
  );
}

export default App;
