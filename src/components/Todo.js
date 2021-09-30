import React from "react";

import { P } from "./StyledComponents/TextStyles";

const ToDo = (props) => {
  const click = () => {
    props.toggle(props.todo.id);
  };

  return (
    <div
      onClick={click}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <P>{props.todo.name}</P>
    </div>
  );
};

export default ToDo;
