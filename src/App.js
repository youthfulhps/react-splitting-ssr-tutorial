import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";//notify 코드가 main 파일안에 들어가게 된다.
//import() 함수 형태로 메서드 안에서 사용하면 파일을 분리시켜 저장할 수 있다.
//실체 필요한 지점에서 파일을 불러와서 함수를 사용할 수 있다.

function App() {
  const onClick = () => {
    import("./notify").then((result) => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
