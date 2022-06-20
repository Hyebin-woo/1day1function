import { useState } from "react";

function App() {
  const [name, setName] = useState("혜빈");
  let color = "white";

  function changeColor() {
    color = color === "white" ? "black" : "white";
    document.querySelector(".color").textContent = color;
  }

  return (
    <>
      <h1>다 바꿔버리기</h1>
      <p>{name}</p>
      <button onClick={() => setName(name === "혜빈" ? "웨빈" : "혜빈")}>
        바꾸기1
      </button>
      <p class="color">{color}</p>
      <button onClick={changeColor}>바꾸기2</button>
    </>
  );
}

export default App;
