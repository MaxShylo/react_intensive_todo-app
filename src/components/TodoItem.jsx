import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';

const TodoItem = (props) => {
  const { todo, removeTodo, updateTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  const update = (id, value, event) => {
    if (event.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  }

  return (
    <li key={todo.id} className="Todo-item">
      <textarea
        className='Todo-item__input'
        ref={inputRef}
        disabled={inputRef}
        defaultValue={todo.item}
        onKeyPress={(event) => update(todo.id, inputRef.current.value, event)}
      />

      <div className="Todo-item___btns">
        <button
          className="Todo-item___button"
          onClick={() => changeFocus()}
        >
          <AiFillEdit />
        </button>

        {
          !todo.completed && (
            <button
              className="Todo-item___button Todo-item___button--completed"
              onClick={() => completeTodo(todo.id)}
            >
              <IoCheckmarkDoneSharp />
            </button>
          )
        }

        <button
          className="Todo-item___button Todo-item___button--delete"
          onClick={() => removeTodo(todo.id)}
        >
          <IoClose />
        </button>
      </div>
      {todo.completed && <span className='Todo-item__completed'>done</span>}
    </li>
  );
};

export default TodoItem;
