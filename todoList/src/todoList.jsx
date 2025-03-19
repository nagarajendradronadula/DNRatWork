import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function TodoList() {
    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    const [newTodo, setNewTodo] = useState("");
    const [editId, setEditId] = useState(null);

    const mclaren1 = "/images/mclaren1.jpg";
    const audi = "/images/audi.jpeg";
    const mclaren = "/images/mclaren.jpeg";
    const ferrari = "/images/ferrari.jpeg";
    const camaro = "/images/camaro.jpeg";

    const styles = {
        textDecorationLine: "line-through",
        color: "gray",
    };

    const updateTodo = (event) => {
        setNewTodo(event.target.value);
    };

    const addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                { task: newTodo, id: uuidv4(), isDone: false }
            ]);
            setNewTodo("");
        }
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const updateTodoItem = (id) => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, task: newTodo } : todo
                )
            );
            setEditId(null);
            setNewTodo("");
        }
    };

    const enableEditMode = (id, currentTask) => {
        setEditId(id);
        setNewTodo(currentTask);
    };

    const markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    // const allTasksDone = () => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => ({ ...todo, isDone: true }))
    //     );
    // };

    return (
        <div>

            <section class="container">
                <div class="slider-wrapper">
                    <div class="slider">
                        <img id="slide-1" src={mclaren1} alt="slider Image 1" />
                        <img id="slide-2" src={audi} alt="slider Image 2" />
                        <img id="slide-3" src={mclaren} alt="slider Image 3" />
                        <img id="slide-4" src={ferrari} alt="slider Image 4" />
                        <img id="slide-5" src={camaro} alt="slider Image 5" />
                    </div>
                    <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                    </div>
                </div>
            </section>

            <input
                placeholder="Type a Task to add"
                value={newTodo}
                onChange={updateTodo}
                style={{ height: "1.8rem", width: "10rem", border: "solid 0.1rem black", borderRadius: "5px", margin: "10px", marginTop: "5rem", padding: "10px" }}

            />
            <br />
            <button style={{ backgroundColor: "aqua" }} onClick={addNewTask}>
                Add Task
            </button>
            <br />
            <br />
            <hr />
            <h3>Tasks to be Done!</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editId === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    placeholder="Edit your task"
                                    style={{ height: "1.8rem", width: "10rem", border: "solid 0.1rem black", borderRadius: "5px", margin: "10px", padding: "10px" }}
                                />
                                <button
                                    onClick={() => updateTodoItem(todo.id)}
                                    style={{ backgroundColor: "aqua" }}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div>
                                <span style={todo.isDone ? styles : {}}>{todo.task}</span>
                                <button onClick={() => enableEditMode(todo.id, todo.task)}>
                                    Update
                                </button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <button onClick={() => markAsDone(todo.id)}>
                                    {todo.isDone ? "Not Done" : "Done"}
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <br />
            <hr />
            <button onClick={() => setTodos(prevTodos => {
                const allDone = prevTodos.every(todo => todo.isDone);
                return prevTodos.map(todo => ({ ...todo, isDone: !allDone }));
            })}>
                {todos.every(todo => todo.isDone) ? "Mark All Not Done" : "Mark All Done"}
            </button>
        </div>
    );
}

export default TodoList;