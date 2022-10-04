import { reducer, addTodos, removeTodos, completeTodos } from '../../redux/reducer';

test('should return the initial state', () => {
  const result = reducer(undefined, { type: '' });
  expect(result).toEqual([]);
});

test('should add new task', () => {
  const action = { type: addTodos.type, payload: { id: 17, item: 'Todo input value', completed: true } };
  const result = reducer([], action);

  expect(result).toEqual([{ id: 17, item: 'Todo input value', completed: true }]);
});

test('should delete task', () => {
  const todos = [{ id: 17, item: 'Todo input value', completed: false }];
  const action = { type: removeTodos.type, payload: 17 };
  const result = reducer(todos, action);

  expect(result).toEqual([]);
});

test('should complete task', () => {
  const payload = { id: 17, completed: true }
  const action = { type: completeTodos.type, payload: payload }
  const initialState = [{ id: 17, item: 'Todo input value', completed: true }]
  const result = reducer(initialState, action)

  expect(result[0].completed).toBe(true)
});
