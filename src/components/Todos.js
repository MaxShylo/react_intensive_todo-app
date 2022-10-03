import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from 'react-icons/go';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const { addTodo } = props;
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setTodo(value);
  };

  const add = () => {
    if (todo === '') {
      alert('Todo is empty!!! Please, put Todo!!!');
    } else {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      })

      setTodo('');
    }
  }

  return (
    <div className='Todo-adder'>

      <input
        type="text"
        className="Todo-adder__input"
        onChange={handleChange}
        value={todo}
      />

      <button
        className="Todo-adder__add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </button>
      <br />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
