import React from "react";

const ToDo = (props) => {
  const click = () => {
    props.toggle(props.todo.id);
  };

  return (
    <div
      onClick={click}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default ToDo;
