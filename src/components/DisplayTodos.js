import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const { todos, removeTodo, updateTodo, completeTodo } = props;

  const [sort, setSort] = useState('active');

  return (
    <div className="Display-todos">
      <div className="Display-todos__buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={classNames(
            'Display-todos__btn',
            {'is-active': sort === 'active'}
          )}
          onClick={() => setSort('active')}
        >
          Active
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={classNames(
            'Display-todos__btn',
            {'is-active': sort === 'completed'}
          )}
          onClick={() => setSort('completed')}
        >
          Completed
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={classNames(
            'Display-todos__btn',
            {'is-active': sort === 'all'}
          )}
          onClick={() => setSort('all')}
        >
          All
        </motion.button>
      </div>

      <ul className="Display-todos__list">
        <AnimatePresence>
          {
            todos.length > 0 && sort === 'active'
              ? (todos.map(todo => {
                return (
                  todo.completed === false && (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      removeTodo={removeTodo}
                      updateTodo={updateTodo}
                      completeTodo={completeTodo}
                    />
                  )
                )
              }))
              : null
          }

          {
            (todos.length > 0 && sort === 'completed')
              ? (todos.map(todo => {
                return (
                  todo.completed === true && (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      removeTodo={removeTodo}
                      updateTodo={updateTodo}
                      completeTodo={completeTodo}
                    />
                  )
                )
              }))
              : null
          }

          {
            (todos.length > 0 && sort === 'all')
              ? (todos.map(todo => {
                return (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    completeTodo={completeTodo}
                  />
                )
              }))
              : null
          }
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
