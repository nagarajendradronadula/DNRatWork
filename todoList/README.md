# Todo List Application

## Introduction

### Purpose
The Todo List Application is a simple task management tool built using the MERN Stack. It allows users to manage their daily tasks by adding, editing, deleting, and marking tasks as completed.

### Scope
This application is designed for personal task management and can be extended with additional features such as task categories, due dates, and database storage.

## Technologies Used

| Technology/Library | Purpose | Compatible Version |
|-------------------|---------|--------------------|
| React.js | Frontend framework for UI components | ^18.2.0 |
| React Hooks (useState) | Manages component state | Built-in (React 16.8+) |
| UUID Library (uuid) | Generates unique task identifiers | ^9.0.1 |
| Node.js | JavaScript runtime for development | ^18.0.0 |
| npm or yarn | Package manager for dependencies | npm ^9.0.0 or yarn ^1.22.0 |

## Features

### 1. Add Task
- Users can type a new task and add it to the list.
- The task is stored with a unique identifier.

### 2. Edit Task
- Users can modify an existing task.
- Clicking “Update” enables an input field to edit the task text.

### 3. Delete Task
- Users can remove a task from the list permanently.

### 4. Mark as Done/Not Done
- Users can toggle the completion status of a task.
- Completed tasks appear with a strikethrough effect and gray text.

### 5. Mark All as Done/Not Done
- Users can toggle the completion status of all tasks at once.
- If some tasks are incomplete, clicking this button marks all as done.
- If all tasks are done, clicking this button marks all as not done.

## Application Workflow

### User Actions
1. **Adding a Task**
   - Enter the task name in the input field.
   - Click the “Add Task” button to save the task.
2. **Editing a Task**
   - Click the “Update” button next to a task.
   - Modify the task name and save the changes.
3. **Deleting a Task**
   - Click the “Delete” button to remove a task from the list.
4. **Marking a Task as Done/Not Done**
   - Click the “Done” button to mark a task as completed.
   - Click the “Not Done” button to mark it as pending again.
5. **Marking All Tasks as Done/Not Done**
   - Click the “Mark All Done” button to mark all tasks as completed.
   - Click the “Mark All Not Done” button to reset all tasks.

## State Management

The application uses React’s `useState` hook to manage the following states:

| State Variable | Type | Purpose |
|--------------|------|---------|
| `todos` | Array | Stores the list of tasks, each represented as an object with `task`, `id`, and `isDone` properties. |
| `newTodo` | String | Stores the input value when adding or editing a task. |
| `editId` | String or null | Tracks the task that is currently being edited. |

Each task object has the following structure:

```json
{
    "task": "Sample Task",
    "id": "unique-id",
    "isDone": false
}
```

## Core Functions and Code Implementation

### `updateTodo(event)`
Updates the `newTodo` state as the user types in the input field.

```javascript
const updateTodo = (event) => {
    setNewTodo(event.target.value);
};
```

### `addNewTask()`
Adds a new task to the list if the input is not empty.

```javascript
const addNewTask = () => {
    if (newTodo.trim() !== "") {
        setTodos((prevTodos) => [
            ...prevTodos,
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);
        setNewTodo("");
    }
};
```

### `deleteTodo(id)`
Removes the selected task from the list.

```javascript
const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};
```

### `updateTodoItem(id)`
Updates the task’s text when the save button is clicked after editing.

```javascript
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
```

### `enableEditMode(id, currentTask)`
Enables editing mode for a task.

```javascript
const enableEditMode = (id, currentTask) => {
    setEditId(id);
    setNewTodo(currentTask);
};
```

### `markAsDone(id)`
Toggles the `isDone` status of a task.

```javascript
const markAsDone = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
    );
};
```

### `allTasksDone()`
Marks all tasks as done or resets them.

```javascript
const allTasksDone = () => {
    setTodos((prevTodos) => {
        const allDone = prevTodos.every(todo => todo.isDone);
        return prevTodos.map(todo => ({ ...todo, isDone: !allDone }));
    });
};
```

## User Interface and Styling

### UI Elements

| UI Element | Description |
|-----------|-------------|
| Input Field | Allows users to enter a new task or update an existing task. |
| Add Task Button | Adds a new task to the list. |
| Task List | Displays all tasks with options to mark as done, update, or delete. |
| Edit Task Input | Appears when a task is being edited. |
| All Tasks Done Button | Toggles the completion status of all tasks. |

### Styling
- Completed tasks appear in gray with a strikethrough effect.
- Pending tasks are displayed normally.

```javascript
const styles = {
    textDecorationLine: "line-through",
    color: "gray",
};
```

## Future Improvements
- **Local Storage**: Store tasks to persist data across page reloads.
- **Task Categories**: Group tasks into different categories.
- **Due Dates & Notifications**: Set deadlines for tasks.
- **Improved UI**: Use Material-UI or Tailwind CSS for better design.

## GitHub Repository
You can find the full source code in the GitHub repository:

[GitHub Link](https://github.com/nagarajendradronadula/DNRatWork/tree/13e3fda3a979030689ff82404e60c937294b44d1/todoList)

## Conclusion
The Todo List Application is a simple yet effective tool for task management using React.js. It provides core functionalities like adding, editing, deleting, and marking tasks. Future improvements can make the application more robust and user-friendly.
