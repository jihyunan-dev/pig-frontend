import { useEffect, useCallback } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import Header from "../components/Header";
import GlobalStyles from "../shared/GlobalStyles";
import theme from "../themes/theme";

import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
  subscribeInfoText,
  subscribeWarning,
} from "../shared/useSocket";
import { addMessage, setSocket } from "../redux/modules/chat";
import { checkMobile, hideSidebar } from "../redux/modules/resize";

const App = () => {
  const dispatch = useDispatch();

  const socket = useSelector((state) => state.chat.socket);
  const { isMobile, isShowSidebar } = useSelector((state) => state.resize);

  const {
    location: { pathname },
  } = useSelector((state) => state.router);

  const result =
    pathname.includes("workspace") || pathname.includes("password");

  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch(checkMobile(true));
      dispatch(hideSidebar());
    }
    return () => {
      disconnectSocket();
    };
  }, [dispatch]);

  useEffect(() => {
    if (!socket) {
      const setNewSocket = (socket) => dispatch(setSocket(socket));
      initiateSocket(setNewSocket);

      subscribeToChat((err, data) => {
        if (err) console.log(err);
        dispatch(addMessage(data));
      });

      subscribeInfoText((err, data) => {
        if (err) {
          console.log(err);
          return;
        }
      });

      subscribeWarning((err, data) => {
        if (err) console.log(err);
      });
    }
  }, [dispatch, socket]);

  // 창 크기 감지하여 767px 이하일 때는 워크스페이스 채팅창을 숨기려는 목적
  const confirmMobile = useCallback(
    (e) => {
      if (e.target.innerWidth < 768) {
        if (isShowSidebar) dispatch(hideSidebar());
        if (!isMobile) dispatch(checkMobile(true));
      } else {
        if (isMobile) dispatch(checkMobile(false));
      }
    },
    [isShowSidebar, dispatch, isMobile]
  );

  // debounce를 너무 길게주면 부자연스러움
  useEffect(() => {
    window.addEventListener("resize", _.debounce(confirmMobile, 200));
    return () =>
      window.removeEventListener("resize", _.debounce(confirmMobile, 200));
  }, [dispatch, confirmMobile]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {!result ? <Header /> : null}
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
