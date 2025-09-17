import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Learn TypeScript", completed: true },
        { id: 3, title: "Build a React App", completed: false },
    ]);
  
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} id={`todo_item_id_${todo.id}`} className="flex justify-between items-center">
                        <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
                        <button onClick={() => deleteTodo(todo.id)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
