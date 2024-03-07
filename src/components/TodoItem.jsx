import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

const TodoItem = ({ item, index, handleDeleteTodo, handleComplete, handleEdit }) => {
  return (
    <div className="todo-list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <div>
        <button className="icon" onClick={() => handleDeleteTodo(index)} title="Delete?">
          <AiOutlineDelete />
        </button>
        <button className="check-icon" onClick={() => handleComplete(index)} title="Complete?">
          <BsCheckLg />
        </button>
        <button className="check-icon" onClick={() => handleEdit(index, item)} title="Edit?">
          <AiOutlineEdit />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
