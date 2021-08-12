import React from "react";
import styled, { css } from "styled-components";
import { Input, Text } from "../../elem";
import Filled from "../../assets/icons/checkbox-filled.svg";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import BoardDrop from "./BoardDrop";

import {
  __memberHandler,
=======

import {
  __addMember,
  __removeMember,
>>>>>>> 07de2c9 (feat : formik 제거 & inputToggle 적용 & 디자인 적용)
  __checkedTodo,
  __deleteTodo,
  __editTotoTitle,
} from "../../redux/modules/todos";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Icon from "../../components/Icon";
import InputToggle from "../../components/InputToggle";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const allMembers = useSelector((state) => state.member.allMembers);
=======
>>>>>>> 07de2c9 (feat : formik 제거 & inputToggle 적용 & 디자인 적용)

  // global
  const { roomId } = useParams();

  const deleteTodoHandler = (e) => {
    e.stopPropagation();
    dispatch(__deleteTodo(roomId, todo.todoId));
  };

  const editFunc = (key, value) => {
    if (value === "") {
      dispatch(__editTotoTitle(roomId, todo.todoId, todo.todoTitle));
    } else {
      dispatch(__editTotoTitle(roomId, todo.todoId, value));
    }
  };

  return (
    <StyleDiv wh={["480px"]} flex={["space-between", "center"]}>
      <StyleDiv>
        <Input
          none
          type="checkbox"
          name="isChecked"
          id={todo.todoId}
          checked={todo.isChecked}
          _onChange={({ target }) => {
            dispatch(__checkedTodo(roomId, todo.todoId, target.checked));
          }}
        />
        <label htmlFor={todo.todoId}>
          {todo.isChecked ? (
            <CheckedIcon src={Filled} alt="체크됨" />
          ) : (
            <NotCheckboxIcon icon="checkbox" size="20px" />
          )}
        </label>
      </StyleDiv>

      <TodoItem>
        <TodoTitle type="body_3">
          <InputToggle
            shape="text"
            name="todoTitle"
            saveFunc={editFunc}
            value={todo.todoTitle}
          />
        </TodoTitle>
<<<<<<< HEAD

        <StyleDiv flex={["", "center"]} wh={["50px"]} mg="0 10px">
          <BoardDrop.Container direction="right" type="default" shadow>
            {allMembers &&
              allMembers.map((memeber, idx) => (
                <BoardDrop.Item
                  key={idx}
                  _onClick={(e) => {
                    dispatch(
                      __memberHandler(roomId, todo.todoId, e.target.innerText)
                    );
                  }}
                >
                  {memeber.memberName}
                </BoardDrop.Item>
              ))}
          </BoardDrop.Container>
          <StyleDiv
            wh={["17px", "22px"]}
            flex={["center", "center"]}
            mg="0 0 0 4px"
          >
            <Text type="body_3">{todo.members.length}</Text>
          </StyleDiv>
        </StyleDiv>
        <div onClick={deleteTodoHandler}>
          <RemoveIcon icon="remove" size="14px" color="var(--grey)" />
        </div>
=======
        <div onClick={deleteTodoHandler}>
          <RemoveIcon icon="remove" size="14px" color="var(--grey)" />
        </div>

        {/* <Flex>
                <select
                  onChange={(e) => {
                    if (e.target.value !== "멤버선택")
                      dispatch(
                        __addMember(roomId, todo.todoId, e.target.value)
                      );
                  }}
                >
                  <option>멤버선택</option>
                  {members.map((memeber, idx) => (
                    <option key={idx}>{memeber}</option>
                  ))}
                </select>                
              </Flex> */}
>>>>>>> 07de2c9 (feat : formik 제거 & inputToggle 적용 & 디자인 적용)
      </TodoItem>
    </StyleDiv>
  );
};

const TodoItem = styled.div`
  border: 1px solid var(--line);
  padding: 0 14px;
  width: 446px;
  display: flex;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    border: 1px solid var(--main);
  }
`;

const StyleDiv = styled.div`
  ${(props) =>
    props.tb &&
    css`
      border: 1px solid red;
    `}
  ${(props) =>
    props.wh &&
    css`
      width: ${props.wh[0]};
      height: ${props.wh[1]};
    `}
    
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: ${props.flex[0]};
      align-items: ${props.flex[1]};
      gap: ${props.flex[2]}px;
    `}
  padding: ${(props) => props.pd};
  margin: ${(props) => props.mg};
  border: ${(props) => props.border};
`;

const TodoTitle = styled(Text)`
  width: 100%;
`;

const NotCheckboxIcon = styled(Icon)`
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const CheckedIcon = styled.img`
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const RemoveIcon = styled(Icon)`
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export default Todo;
