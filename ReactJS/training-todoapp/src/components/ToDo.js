// Code snippet: rfc + tab = React Functional Component
import React from 'react'
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  padding-left: 5px;
  border-radius: 5px;
  border: none;

  &,
  &:hover {
    text-decoration: ${(p) => p.iscompleted === "true" && "line-through"};
  }

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    text-decoration: line-through;
    display: none;

    &:hover {
      background-color: #ffffff;
      border-radius: 3px;
    }
  }
`;
export default function ToDo({ todo, onCheckBtnClick }) {
  return (
    <React.Fragment>
      <ButtonStyled
        iscompleted={todo.isCompleted ? "true" : "false"}
        shouldFitContainer
        iconAfter={!todo.isCompleted &&
          (
            <span
              className="check-icon"
              onClick={() => onCheckBtnClick(todo.id)}>
              <CheckIcon
                primaryColor="#4fff4f"
              />
            </span>
          )
        }>
        {todo.name}
      </ButtonStyled>
    </React.Fragment>
  )
}
