import './App.css';
import Input from './components/input';
import Button from './components/button';

function App() {
  return (
    <div className="text-lg text-center mx-auto w-1/4 p-10 font-TNanti">
      <div className='border-2 border-black p-5 w-96 h-full rounded-lg shadow-2xl bg-slate-100'>
        <h1>Todo List</h1>

        <Input />

        <Button
          label="Post"

        />

      </div>
    </div>
  );
}

export default App;
