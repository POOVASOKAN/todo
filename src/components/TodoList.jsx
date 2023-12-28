import React from "react";

function TodoList({ onEdit, index, todo, onDelete }) {
  const { title, description, status } = todo;

  const handleEdit = () => {
    onEdit(index);
  };

  return (
    <div className="card border-warning mb-3 " style={{ maxWidth: '18rem', margin: "10px" }}>
    <div className="text-start m-1s " id="card-title">
      <p className="mt-3">
        Title : {title}
      </p>
      <p>
        Description : {description}
      </p>
      <p className="status mb-4">
        Status:
        <select className="btn btn-secondary p-0 mx-3" value={status}>
          <option value="Completed">Completed</option>
          <option value="Not-Completed">Not-Completed</option>
        </select>
      </p>

      <button
        className="px-3 mx-4 btn btn btn-primary my-3"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="px-3 mx-3 btn btn btn-danger my-3 "
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
    </div>
    </div>
  );
}

export default TodoList;