import React from "react";

import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

import Container from "./components/StyledComponents/ContainerStyled";

const toDoList = [];

var n = 0;
function increment() {
  n++;
  return n;
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleToggle = (id) => {
    // console.log(id);
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            completed: !TextTrackList.completed,
          };
        } else {
          return i;
        }
      }),
    });
  };

  handleNewItem = (name) => {
    const newItem = {
      name: name,
      id: increment(),
      completed: false,
    };

    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, newItem],
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter((i) => {
        return !i.completed;
      }),
    });
  };

  constructor() {
    super();
    this.state = {
      toDoList: toDoList,
    };
  }

  render() {
    return (
      <Container>
        <h2>What's on your list today?</h2>
        <ToDoForm
          newItem={this.handleNewItem}
          setState={this.setState}
          toDoList={this.state.toDoList}
        />
        <ToDoList
          clear={this.handleClear}
          toggle={this.handleToggle}
          toDoList={this.state.toDoList}
        />
      </Container>
    );
  }
}

export default App;
