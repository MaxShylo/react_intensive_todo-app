import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <h1 className='Page-title'>TODO App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
