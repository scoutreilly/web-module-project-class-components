import React from "react";

import ToDo from "./Todo";

import { HeaderThree } from "./StyledComponents/TextStyles";
import { Button } from "./StyledComponents/FormStyles";

const ToDoList = (props) => {
  const click = () => {
    props.clear();
  };

  return (
    <div>
      {/* loop through todo items */}
      <HeaderThree>~ get 'er done ~</HeaderThree>
      {props.toDoList.map((i) => (
        <ToDo toggle={props.toggle} key={i.id} todo={i} />
      ))}
      <Button onClick={click}>Clear finished items</Button>
    </div>
  );
};

export default ToDoList;
