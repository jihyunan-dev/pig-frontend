import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";

import WSHeader from "../components/Workspace/WSHeader";
import WSRouter from "../shared/WSRouter";
import WSSidebar from "../components/WSSidebar.jsx/WSSidebar";

// api
import { __getDocs } from "../redux/modules/document";
import WSTemplate from "../components/Workspace/WSTemplate";
import { __getOneRoom } from "../redux/modules/room";

const Workspace = (props) => {
  let { path, url } = useRouteMatch();
  const { roomId } = useParams();

  const docs = useSelector((state) => state.document.docList);

  const dispatch = useDispatch();

  useEffect(() => {
    (docs.length === 0 || (docs.length !== 0 && docs[0].roomId !== roomId)) &&
      dispatch(__getDocs(roomId));
    dispatch(__getOneRoom(roomId));
  }, []);

  return (
    <>
      <div>
        <WSHeader url={url} />
        <WSTemplate>
          <WSRouter path={path} />
          {/* <WSSidebar /> */}
        </WSTemplate>
      </div>
    </>
  );
};

export default Workspace;
