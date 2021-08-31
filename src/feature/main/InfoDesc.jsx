import React, { forwardRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import MarkDownEditor from "../../components/MarkDownEditor";
import MarkDownViewer from "../../components/MarkDownViewer";

const InfoDesc = forwardRef(({ editMode }, ref) => {
  const room = useSelector((state) => state.room.roomInfos);
  const { desc } = room;

  // Editor option
  const mainEditorOpt = {
    previewStyle: "tab",
    initialEditType: "markdown",
    useCommandShortcut: true,
    previewHighlight: false,
    height: "200px",
    ref: ref,
    initialValue: desc,
  };

  const mainViewerOpt = {
    initialValue: desc,
  };

  if (editMode) {
    return (
      <EditorContainer>
        <MarkDownEditor option={mainEditorOpt} />
      </EditorContainer>
    );
  }

  return (
    <ViewerContainer padding={true}>
      {desc && <MarkDownViewer option={mainViewerOpt} />}
    </ViewerContainer>
  );
});

const EditorContainer = styled.div`
  margin-top: 20px;
  min-height: 200px;
`;

const ViewerContainer = styled.div`
  max-width: 100%;
  padding: ${(props) => props.padding && "0 12px;"};
  padding-bottom: 18px;

  ${({ theme }) => theme.device.mobile} {
    padding: 0;
    margin-bottom: -10px;
  }
`;

export default InfoDesc;
