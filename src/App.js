import React from 'react';
import Start from './components/Start';
import TodoPage from './components/TodoPage';
import './styles/main.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route exact path='/todos' element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
