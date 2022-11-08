import React from 'react';
import Start from './components/Start';
import TodoPage from './components/TodoPage';
import './styles/main.css';
import { Routes, Route } from "react-router-dom";

const App: React.FC = () =>{
  return (
    <div className="App">
      <Routes>
        <Route path='/react_intensive_todo-app.git' element={<Start />} />
        <Route path='/todos' element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
