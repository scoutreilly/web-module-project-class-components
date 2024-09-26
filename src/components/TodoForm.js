import React from "react";

import { Form, Input, Label, Button } from "./StyledComponents/FormStyles";

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
        <Form onSubmit={this.submit}>
          <Label>
            What's on the agenda?
            <Input type="text" name="newToDo" onChange={this.handleChanges} />
            <Button>Add new item</Button>
          </Label>
        </Form>
      </div>
    );
  }
}

export default ToDoForm;
