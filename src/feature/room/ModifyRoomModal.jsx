import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

//components

// elements
import { Button, Input } from "../../elem/index";

//redux
import { __editRoom } from "../../redux/modules/room";
import ImageModule from "../../components/ImageModule";

const ModifyRoomModal = ({ roomId, showModModal, closeModModal }) => {
  const dispatch = useDispatch();
  const [roomImg, setRoomImg] = useState("");

  const [isImage, setIsImage] = useState(false);
  const roomList = useSelector((state) => state.room.room);
  const isEdit = roomId ? true : false;
  const _room = isEdit
    ? roomList && roomList.find((r) => r.roomId === roomId)
    : null;

  const getImgUrlFromS3 = async (callback, file) => {
    const result = await callback(file);
    if (result) {
      setRoomImg(result);
    } else {
      setRoomImg(_room.roomImage);
    }
  };

  const [contents, setContents] = useState(
    _room
      ? {
          roomName: _room.roomName,
          subtitle: _room.subtitle,
        }
      : ""
  );

  const [tagText, setTagText] = useState(
    _room
      ? {
          tag: _room.tag,
        }
      : ""
  );

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setContents({ ...contents, [name]: value });
    setTagText({ ...tagText, [name]: value });
  };

  const tagList =
    typeof tagText.tag === "string" ? tagText.tag.split(",") : tagText.tag;

  const disabled = contents.roomName === "";

  const modifyFile = () => {
    if (!disabled) {
      dispatch(__editRoom(roomId, contents, roomImg, tagList));
    }
    closeModModal();
    setIsImage(false);
  };

  const cancelFile = () => {
    closeModModal();
    setIsImage(false);
  };

  return (
    <>
      {showModModal ? (
        <ModalContainer>
          <ModalOverlay onClick={cancelFile}></ModalOverlay>
          <ModalContent>
            <ImageBox>
              <ImageModule
                roomPreview={_room.roomImage}
                getImgUrlFromS3={getImgUrlFromS3}
              />
            </ImageBox>
            <InputBox>
              <Input
                name="roomName"
                type="text"
                placeholder="방 이름"
                _onChange={changeHandler}
                value={contents.roomName}
              />
              <Input
                name="subtitle"
                type="text"
                placeholder="부제목"
                _onChange={changeHandler}
                value={contents.subtitle}
              />
              <Input
                name="tag"
                type="text"
                placeholder="태그"
                _onChange={changeHandler}
                value={tagText.tag}
              />
            </InputBox>
            <BtnBox>
              <Button shape="green-outline" size="150" _onClick={cancelFile}>
                취소
              </Button>
              <Btn>
                <Button disabled={disabled} size="150" _onClick={modifyFile}>
                  수정
                </Button>
              </Btn>
            </BtnBox>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ModalOverlay = styled.div`
  position: absolute;

  display: initial;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  padding-top: 5px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-align: center;
`;

const ImageBox = styled.div`
  margin: 0 auto;
  padding: 46px 0 46px 0;
`;

const InputBox = styled.div`
  margin: 0 auto;
  width: 324px;
`;

const BtnBox = styled.div`
  display: flex;
  width: 300px;
  margin: auto auto 0 auto;
  padding-bottom: 46px;
`;

const Btn = styled.div`
  margin-left: -1px;
`;

export default ModifyRoomModal;
