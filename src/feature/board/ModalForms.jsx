<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Text } from "../../elem";
import { __editCardInfos, resetCard } from "../../redux/modules/board";

import styled, { css } from "styled-components";
import InputToggle from "../../components/InputToggle";
<<<<<<< HEAD
import DatePickerExample from "./DatePicker";
import BoardDrop from "./BoardDrop";
import moment from "moment";
=======

// import "react-datepicker/dist/react-datepicker.css";
>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)

const ModalForms = ({ content, setContent }) => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // 전역변수
  const { roomId } = useParams();

=======
  // 전역변수
  const { roomId } = useParams();

>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)
  useEffect(() => {
    return () => {
      dispatch(resetCard());
    };
  }, []);

  const editFunc = (key, value) => {
    const editObj = { cardId: content.cardId, [key]: value };
<<<<<<< HEAD
    dispatch(__editCardInfos(roomId, editObj));
=======
    dispatch(__editCardInfos(roomId, content.cardId, editObj));
>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)
  };

  return (
    <Container>
      <StyleDiv wh={["480px", "26px"]} mg="0 0 20px 0">
        <StyleDiv flex={["flex-start", "center", "10"]}>
<<<<<<< HEAD
          <BoardDrop.Container
            componentType="colorPicker"
            bgColor={content.color}
          >
            <BoardDrop.Item
              componentType="colorPicker"
              color="blue"
              _onClick={() => {
                editFunc("color", "blue");
              }}
            ></BoardDrop.Item>
            <BoardDrop.Item
              componentType="colorPicker"
              color="violet"
              _onClick={() => {
                editFunc("color", "violet");
              }}
            ></BoardDrop.Item>
            <BoardDrop.Item
              componentType="colorPicker"
              color="yellow"
              _onClick={() => {
                editFunc("color", "yellow");
              }}
            ></BoardDrop.Item>
            <BoardDrop.Item
              componentType="colorPicker"
              color="orange"
              _onClick={() => {
                editFunc("color", "orange");
              }}
            ></BoardDrop.Item>
            <BoardDrop.Item
              componentType="colorPicker"
              color="mint"
              _onClick={() => {
                editFunc("color", "mint");
              }}
            ></BoardDrop.Item>
          </BoardDrop.Container>
=======
          <Dot bg="red" />
>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)
          <Text type="sub_1">
            <InputToggle
              name="cardTitle"
              value={content.cardTitle}
              saveFunc={editFunc}
            />
          </Text>
        </StyleDiv>
      </StyleDiv>

      <StyleDiv mg="0 0 6px auto" flex={["flex-end", "center"]}>
<<<<<<< HEAD
        <DatePickerExample
          cardId={content.cardId}
          roomId={roomId}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          content={content}
        />
        <StyleDiv flex={["center", "center"]}>
          <Text type="body_2">
            D-{moment(moment(content.endDate) - Date.now()).format("DD")}
          </Text>
        </StyleDiv>
      </StyleDiv>
=======
        <StyleDiv wh={["170px", "50px"]} pd="10px" flex={["center", "center"]}>
          <StText type="body_2">
            <InputToggle
              shape="date"
              name="startDate"
              saveFunc={editFunc}
              value={content.startDate}
            />
          </StText>
        </StyleDiv>

        <StyleDiv wh={["170px", "50px"]} pd="10px" flex={["center", "center"]}>
          <StText type="body_2">
            <InputToggle
              shape="date"
              name="endDate"
              saveFunc={editFunc}
              value={content.endDate}
            />
          </StText>
        </StyleDiv>

        <StyleDiv flex={["center", "center"]}>
          <Text type="body_2">D-3</Text>
        </StyleDiv>
      </StyleDiv>

>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)
      <StyleDiv
        wh={["480px", "180px"]}
        pd="10px"
        border="1px solid var(--line)"
      >
        <StText type="body_3">
          <InputToggle
            resize="none"
            name="desc"
            placeholder="내용을 입력해주세요."
            value={content.desc}
            shape="textarea"
            saveFunc={editFunc}
          />
        </StText>
      </StyleDiv>
<<<<<<< HEAD
=======

      {/* <div>
        <select name="color" onChange={editContentHandler}>
          <option>red</option>
          <option>blue</option>
          <option>green</option>
        </select>
      </div> */}
>>>>>>> 4cecc02 (edit : card clean up 적용 & 디자인 적용)
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
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

const Dot = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const StText = styled(Text)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default ModalForms;
