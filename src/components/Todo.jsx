import React, { useState } from "react";
import TodoList from "./TodoList";

function todo() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, settodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [statusFilter, setStatusFilter] = useState("All");

  const handleAddTodo = () => {
    if (title && description) {
      const newTodo = {
        title,
        description,
      };
      if (editingIndex !== -1) {
        // If editing an existing todo, replace it
        const updatedtodo = [...todo];
        updatedtodo[editingIndex] = newTodo;
        settodo(updatedtodo);
      } else {
        // If adding a new todo, append it
        settodo([...todo, newTodo]);
      }

      settitle("");
      setDescription("");
      setEditingIndex(-1);
    }
  };

  const editTodo = (index) => {
    const { title, description } = todo[index];
    settitle(title);
    setDescription(description);
    setEditingIndex(index);
  };

  const deleteTodo = (index) => {
    const updatetodo = [...todo];
    updatetodo.splice(index, 1);

    settodo(updatetodo);
  };

  return (
    <div>
      <div className="container" id="todo">
        <div className ="row">
          <div className ="col-md-6 offset-md-3">
          <div className="card my-5">
            <div className="card-header">
              <h3 className="text-center">To Do Task</h3>
            </div>
        <div className="card-body mt-3 d-flex align-items-center justify-content-center flex-column p-3">
        <input
          type="text"
          className="TaskInput p-3 mb-3"
          id="TextInput"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          type="text"
          className="description p-3 mb-3"
          id="TextInput"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-primary " onClick={handleAddTodo}>
          {" "}
          Add Todo
        </button>
      </div>
      </div>

      <div className="d-flex justify-content-center justify-content-md-between align-items-center" style={{ width: "100%", margin: "auto" }}>

        <h6 className="d-flex  justify-content-center align-items-center my-3" >
       Filter:
          <select
            className="btn btn-danger btn-secondary p-0 mx-3"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option className="btn btn-success opt" value="All">
              All
            </option>
            <option className="btn btn-success opt" value="Completed">
              Completed
            </option>
            <option className="btn btn-success opt" value="Not-Completed">
              Not-Completed
            </option>
          </select>
        </h6>
      </div>
</div>
      <div className="row" style={{margin: "20px"}}>
        {todo
          .filter((todo) => {
            if (statusFilter === "All") {
              return true;
            } else if (statusFilter === "Completed") {
              return todo.completed;
            } else if (statusFilter === "Not-Completed") {
              return !todo.completed;
            }
            return false;
          })
          .map((todo, index) => (
            <TodoList
              key={index}
              index={index}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default todo