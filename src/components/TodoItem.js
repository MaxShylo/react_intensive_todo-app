import { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
    <motion.li
      initial={{
        x: "150vw",
        transition: { type: "spring", duration: 2 },
      }}
      animate={{
        x: 0,
        transition: { type: "spring", duration: 2 },
      }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={todo.id}
      className="Todo-item"
    >
      <textarea
        className='Todo-item__input'
        ref={inputRef}
        disabled={inputRef}
        defaultValue={todo.item}
        onKeyPress={(event) => update(todo.id, inputRef.current.value, event)}
      />

      <div className="Todo-item___btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="Todo-item___button"
          onClick={() => changeFocus()}
        >
          <AiFillEdit />
        </motion.button>

        {
          !todo.completed && (
            <motion.button
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              className="Todo-item___button Todo-item___button--completed"
              onClick={() => completeTodo(todo.id)}
            >
              <IoCheckmarkDoneSharp />
            </motion.button>
          )
        }

        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="Todo-item___button Todo-item___button--delete"
          onClick={() => removeTodo(todo.id)}
        >
          <IoClose />
        </motion.button>
      </div>
      {todo.completed && <span className='Todo-item__completed'>done</span>}
    </motion.li>
  );
};

export default TodoItem;
