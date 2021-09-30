import React from "react";

import ToDo from "./Todo";

const ToDoList = (props) => {
  const click = () => {
    props.clear();
  };

  return (
    <div>
      {/* loop through todo items */}
      {props.toDoList.map((i) => (
        <ToDo toggle={props.toggle} key={i.id} todo={i} />
      ))}
      <button onClick={click}>Clear finished items</button>
    </div>
  );
};

export default ToDoList;
