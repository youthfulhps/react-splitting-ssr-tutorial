import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";

//React에서 제공하는 lazy와 Suspense는 서버 사이드 랜더링을 지원하지 않는다.
//Loadable Components는 서버 사이드 랜더링을 지원한다.

const SplitMe = loadable(() => import("./components/SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
