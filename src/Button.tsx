import * as React from "react";
import styled from "styled-components";
import InputCheckedEntity from "./inputCheckedEntity";

const Label: any = styled.label`
  margin: 0 auto;
  display: block;
  width: 8em;
  height: 1.2em;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 3em;
  :after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(40%, -43%);
    background-color: ${props => (props.isChecked ? "#64ad72" : "white")};
    width: 2.1em;
    height: 2.1em;
    border-radius: 50%;
    transition: all 0.3s ease;
    left: ${props => (props.isChecked ? "45%" : "10%")};
    box-shadow: 1px 1px 10px #ccc;
  }
`;

const ChildLabel: any = styled.div`
  width: 50%;
  height: 1.5em;
  margin: 0 auto;
  margin-top: 0.92em;
  border-radius: 20px;
  background-color: ${props => (props.isChecked ? "#00cc00" : "grey")};
  transition: all 0.6s ease;
  opacity: 0.6;
`;

const Input = styled.input`
  display: none;
`;

interface StateInput {
  entity: InputCheckedEntity;
}

class Button extends React.Component<{}, StateInput> {
  constructor() {
    super({});

    this.state = {
      entity: {
        isChecked: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let checked: boolean = this.state.entity.isChecked;
    const nextState = {
      ...this.state,
      entity: {
        ...this.state.entity,
        isChecked: !checked
      }
    };

    this.setState(nextState);
  }

  render() {
    return (
      <div>
        <Label htmlFor="check" isChecked={this.state.entity.isChecked}>
          <ChildLabel isChecked={this.state.entity.isChecked} />
        </Label>
        <Input type="checkbox" id="check" onChange={this.handleChange} />
        {this.state.entity.isChecked ? "Checked" : "Not checked"}
      </div>
    );
  }
}

export default Button;
