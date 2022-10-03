import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import TodoItem from './TodoItem';

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
        <button
          className="Display-todos__btn -active"
          onClick={() => setSort('active')}
        >
          Active
        </button>

        <button
          className="Display-todos__btn -completed"
          onClick={() => setSort('completed')}
        >
          Completed
        </button>

        <button
          className="Display-todos__btn -all"
          onClick={() => setSort('all')}
        >
          All
        </button>
      </div>

      <ul className="Display-todos__list">
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
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
