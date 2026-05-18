import { useState } from "react";

function ToDoItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <button onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
            }}
          >
            {task.text}
          </span>

          <button
            onClick={() =>
              toggleComplete(task.id)
            }
          >
            Complete
          </button>

          <button
            onClick={() =>
              setIsEditing(true)
            }
          >
            Edit
          </button>

          <button
            onClick={() =>
              deleteTask(task.id)
            }
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;