import React from 'react';
import Todos from './Todos';
import DisplayTodos from './DisplayTodos';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const TodoPage: React.FC = () => {
  const location = useLocation();
  const { userName } = location.state;

  return (
    <>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className='Page-title'
      >
        {`${userName.toUpperCase()}\`s todos`}
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </>
  )
}

export default TodoPage;
