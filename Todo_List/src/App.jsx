import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoFrom";
import { Todoitem } from "./components";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (Todo) => {
    setTodo((prve) => [...prve,{id: Date.now(), ...Todo}])
  }

  const updateTodo = (id, todo) => {
    setTodo((prve) => prve.map((prveTodo) => (prveTodo.id === id ? todo : prveTodo)))
  }

  const deleteTodo = (id) => {
    setTodo((prve) => prve.filter((prveTodo) => (prveTodo.id !== id)))
  }

  const ToggleCompletedTodo = (id) => {
    setTodo((prve) => prve.map((prveTodo) => (prveTodo.id === id? {...prveTodo, completed : !prveTodo.completed} : prveTodo )))
  }

  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("Todos"))
    if(todos && todos.length > 0 ){
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  },[todo])

  return (
    <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, ToggleCompletedTodo}}>
      <h1>Todo App</h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
            <TodoForm/>
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
