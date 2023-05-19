// Code snippet: rfc + tab = React Functional Component
import React from 'react'
import ToDo from './ToDo';

export default function ToDoList({ todoList, onCheckBtnClick }) {
  return (
    <React.Fragment>
      {
        todoList.map((todo) => (
          <ToDo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
        )
        )
      }
    </React.Fragment>
  );
}