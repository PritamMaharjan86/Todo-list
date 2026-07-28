import "./App.css";
import Input from "./components/input";
import { useEffect, useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API; //IF CREATE REACT APP PROJECT THEN SHOULD STARTS WITH REACT_APP

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_API}/todos`);

        setTodos(response.data);
      } catch (err) {
        console.log("Error on fetching todo list", err);
      }
    };

    getList();
  }, []);

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(capitalize(e.target.value.trimStart()));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Please enter a todo item.");
      return;
    }

    const response = await axios.post(`${REACT_APP_BACKEND_API}/todos`, {
      title: input.trim(),
    });

    const newTodo = {
      id: response.data.id,
      title: response.data.title,
      completed: false,
      isEditing: false,
      isDeleting: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
    toast.success("Todo added!");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${REACT_APP_BACKEND_API}/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      console.log("Deleted");
      toast.warning("Todo deleted!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.patch(`${REACT_APP_BACKEND_API}/todos/${id}`);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
      console.log("working button");
      toast.success("Todo updated!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (id) => {
    const todo = todos.find((todo) => todo.id === id); //searching thru todo array list and finding out the todo with same id as the one that is being edited
    try {
      await axios.put(`${REACT_APP_BACKEND_API}/todos/${id}`, {
        newTitle: todo.title, //sending edited todo as newTitle to server / database
      });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 px-4 py-10">
      <ToastContainer theme="dark" position="top-center" />

      <div className="relative w-full max-w-2xl p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white">
        <h1 className="text-5xl font-bold font-Kind text-center mb-10 text-white bg-clip-text drop-shadow-xl">
          Todo Tracker
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-8 w-1/2">
          <Input
            value={input}
            onChange={handleChange}
            placeholder={"Remind you anything ?"}
            type="text"
            className="shadow-xl w-full p-3 font-Avocado rounded-lg text-xl tracking-wider placeholder:text-orange-100 placeholder:text-md text-orange-100 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </form>

        <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center px-4 py-2 rounded-2xl transition-all border transform duration-300 ease-in-out 
                ${todo.isDeleting ? "bg-red-800 line-through decoration-red-800 " : ""} 
                ${
                  todo.isEditing ?
                    "bg-blue-400 text-white font-Avocado border-blue-600"
                  : todo.completed ?
                    "bg-green-600 text-orange-300 border-orange-400/20 line-through decoration-green-600 decoration-2"
                  : "bg-white/10 border-white/10 text-white"
                }
              
              `}>
              {todo.isEditing ?
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, title: e.target.value } : t,
                      ),
                    )
                  }
                  className=" text-blue-600 w-full bg-blue-200 p-2 rounded-3xl"
                />
              : <span className="flex-grow text-white font-Avocado text-lg tracking-wide">
                  {todo.title}
                </span>
              }

              <div className="flex space-x-3 ml-4">
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="hover:scale-110 transition text-orange-100 hover:text-green-400">
                  <TiTickOutline size={22} />
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="hover:scale-110 transition text-orange-100 hover:text-blue-500">
                  <MdEdit size={22} />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="hover:scale-110 transition text-orange-100 hover:text-red-500">
                  <MdDeleteForever size={22} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
