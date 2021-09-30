import styled from "styled-components";

const Form = styled.form`
  background-color: #feecf9;
  align-content: center;
  padding: 50px;
  border: 3px #eccbe2 dotted;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const Input = styled.input`
  padding: 0.5em;
  color: #7e3d6b;
  background: fff;
  border: 0.5px #eccbe2 solid;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 1.5em;
  margin-top: 0.5em;
`;

const Label = styled.label`
  margin-bottom: 1.5em;
  display: block;
  color: #7e3d6b;
`;

const Button = styled.button`
  padding: 0.5em;
  background: #7e3d6b;
  color: white;
  font-size: 14px;
  border-radius: 5px;
`;

export { Form, Input, Label, Button };
