# **Todo List Application**

## **1. Introduction**

### **1.1 Purpose**
The **Todo List Application** is a simple task management tool built using **React.js**. It allows users to manage their daily tasks by adding, editing, deleting, and marking tasks as completed.

### **1.2 Scope**
This application is designed for personal task management and can be extended with additional features such as task categories, due dates, and database storage.

### **1.3 Technologies Used**
The following technologies and libraries are used in this project:

| Technology/Library  | Purpose | Compatible Version |
|--------------------|---------|--------------------|
| **React.js**      | Frontend framework for UI components | `^18.2.0` |
| **React Hooks (`useState`)** | Manages component state | Built-in (React 16.8+) |
| **UUID Library (`uuid`)** | Generates unique task identifiers | `^9.0.1` |
| **Node.js**       | JavaScript runtime for development | `^18.0.0` |
| **npm or yarn**   | Package manager for dependencies | npm `^9.0.0` or yarn `^1.22.0` |

---

## **2. Features**

### **2.1 Add Task**
- Users can type a new task and add it to the list.
- The task is stored with a unique identifier.

### **2.2 Edit Task**
- Users can modify an existing task.
- Clicking "Update" enables an input field to edit the task text.

### **2.3 Delete Task**
- Users can remove a task from the list permanently.

### **2.4 Mark as Done/Not Done**
- Users can toggle the completion status of a task.
- Completed tasks appear with a strikethrough effect and gray text.

### **2.5 Mark All as Done/Not Done**
- Users can toggle the completion status of all tasks at once.
- If some tasks are incomplete, clicking this button marks all as done.
- If all tasks are done, clicking this button marks all as not done.

---

## **3. Application Workflow**

### **3.1 User Actions**
1. **Adding a Task**  
   - Enter the task name in the input field.  
   - Click the "Add Task" button to save the task.  

2. **Editing a Task**  
   - Click the "Update" button next to a task.  
   - Modify the task name and save the changes.  

3. **Deleting a Task**  
   - Click the "Delete" button to remove a task from the list.  

4. **Marking a Task as Done/Not Done**  
   - Click the "Done" button to mark a task as completed.  
   - Click the "Not Done" button to mark it as pending again.  

5. **Marking All Tasks as Done/Not Done**  
   - Click the "Mark All Done" button to mark all tasks as completed.  
   - Click the "Mark All Not Done" button to reset all tasks.  

---

## **4. State Management**

The application uses **React’s `useState` hook** to manage the following states:

| State Variable | Type  | Purpose |
|---------------|-------|---------|
| `todos`       | Array | Stores the list of tasks, each represented as an object with `task`, `id`, and `isDone` properties. |
| `newTodo`     | String | Stores the input value when adding or editing a task. |
| `editId`      | String or `null` | Tracks the task that is currently being edited. |

Each task object has the following structure:
```js
{
    task: "Sample Task",
    id: "unique-id",
    isDone: false
}
