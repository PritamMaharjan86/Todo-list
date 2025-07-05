import './App.css';
import Input from './components/input';
import { useState } from 'react';
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(capitalize(e.target.value.trimStart()));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.warning('Todo deleted!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error('Please enter a todo item.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      content: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
    toast.success('Todo added!');
  };

  const handleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    toast.success('Todo updated!');
  };

  const handleEdit = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 px-4 py-10 font-sans">
      <div className="relative w-full max-w-2xl p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white">
        <h1 className="text-5xl font-bold text-center mb-10 text-white bg-clip-text">
          Todo Tracker
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
          <Input
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="What do you need to do?"
            className="flex-grow p-3 rounded-xl text-white bg-white/10 placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </form>

        <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center p-4 rounded-2xl transition-all border ${todo.completed
                  ? 'bg-orange-900/30 border-orange-400/20 text-orange-300 line-through'
                  : 'bg-white/10 border-white/10'
                }`}
            >
              {todo.isEditing ? (
                <input
                  type="text"
                  value={todo.content}
                  onChange={(e) =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, content: e.target.value } : t
                      )
                    )
                  }
                  className="flex-grow mr-3 p-2 rounded-md bg-black/30 border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              ) : (
                <span className="flex-grow">{todo.content}</span>
              )}

              <div className="flex space-x-3 ml-4">
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="hover:scale-110 transition text-orange-100 hover:text-green-400"
                >
                  <TiTickOutline size={22} />
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="hover:scale-110 transition text-orange-100 hover:text-blue-500"
                >
                  <MdEdit size={22} />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="hover:scale-110 transition text-orange-100 hover:text-red-600"
                >
                  <MdDeleteForever size={22} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ToastContainer theme="dark" />
      </div>
    </div>
  );
}

export default App;
