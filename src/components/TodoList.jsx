import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  isCompleteScreen,
  allTodos,
  completedTodos,
  handleDeleteTodo,
  handleComplete,
  handleDeleteCompletedTodo,
  handleEdit,
  currentEdit,
  currentEditedItem,
  handleUpdateTitle,
  handleUpdateDescription,
  handleUpdateToDo,
}) => {
  return (
    <div className="todo-list">
      {isCompleteScreen === false &&
        allTodos.map((item, index) => {
          if (currentEdit === index) {
            return (
              <div className="edit__wrapper" key={index}>
                <input
                  placeholder="Updated Title"
                  onChange={(e) => handleUpdateTitle(e.target.value)}
                  value={currentEditedItem.title}
                />
                <textarea
                  placeholder="Updated Title"
                  rows={4}
                  onChange={(e) => handleUpdateDescription(e.target.value)}
                  value={currentEditedItem.description}
                />
                <button type="button" onClick={handleUpdateToDo} className="primaryBtn">
                  Update
                </button>
              </div>
            );
          } else {
            return (
              <TodoItem
                key={index}
                item={item}
                index={index}
                handleDeleteTodo={handleDeleteTodo}
                handleComplete={handleComplete}
                handleEdit={handleEdit}
              />
            );
          }
        })}

      {isCompleteScreen === true &&
        completedTodos.map((item, index) => {
          return (
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><small>Completed on: {item.completedOn}</small></p>
              </div>

              <div>
                <button
                  className="icon"
                  onClick={() => handleDeleteCompletedTodo(index)}
                  title="Delete?"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
