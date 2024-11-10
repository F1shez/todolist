import { TodoList } from './components/TodoList';
function App() {
  return (
    <div className='w-screen h-screen justify-center items-center'>
      <h1 className="text-center text-9xl font-thin">Todos</h1>
      <div className='flex justify-center items-center'>
        <TodoList />
      </div>
    </div>
  );
}

export default App
