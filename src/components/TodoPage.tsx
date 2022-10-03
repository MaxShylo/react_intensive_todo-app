import React from 'react';
import Todos from './Todos';
import DisplayTodos from './DisplayTodos';
import { useLocation } from 'react-router-dom';

const TodoPage: React.FC = () => {
  const location = useLocation();
  const { userName } = location.state;
  
  return (
    <>
      <h1 className='Page-title'>{`${userName.toUpperCase()}\`s todos`}</h1>
      <Todos />
      <DisplayTodos />
    </>
  )
}

export default TodoPage;
