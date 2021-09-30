import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  //handle change
  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  //submit
  submit = (e) => {
    e.preventDefault();
    this.props.newItem(this.state.input);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label id="newToDo">
            <input type="text" name="newToDo" onChange={this.handleChanges} />
            <button>Add new todo item</button>
          </label>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
