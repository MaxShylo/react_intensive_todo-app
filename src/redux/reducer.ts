import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
      return state;
    },

    removeTodos: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },

    updateTodos: (state, action: PayloadAction<Todo>) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }

        return todo;
      });
    },

    completeTodos: (state, action: PayloadAction<number>) => {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }

        return todo;
      });
    }
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
