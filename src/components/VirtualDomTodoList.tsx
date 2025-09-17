import { useState, useEffect } from "react";

const VirtualDomTodoList = () => {
    const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
    const [newTodo, setNewTodo] = useState("");

    // Load initial todos (simulate fetching from API/localStorage)
    useEffect(() => {
        setTodos([
            { id: 1, title: "TODO 1" },
            { id: 2, title: "TODO 2" },
            { id: 3, title: "TODO 3" },
            { id: 4, title: "TODO 4" },
            { id: 5, title: "TODO 5" },
            { id: 6, title: "TODO 6" },
        ]);
    }, []);

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos(prev => [
            ...prev,
            {
                id: prev.length ? prev[prev.length - 1].id + 1 : 1,
                title: newTodo.trim(),
            },
        ]);
        setNewTodo("");
    };

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Todo List</h2>
            <div className="mb-4 flex gap-2">
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                    className="border px-2 py-1"
                />
                <button onClick={addTodo} className="bg-blue-500 text-white px-3 py-1 rounded">
                    Add
                </button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center mb-2">
                        <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
                            {todo.title} &times;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VirtualDomTodoList;
