import { useState } from "react";
import style from "./app2.module.css";
import style2 from "./app2.module.scss";

function App() {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      hello react
      <p className={style["count-s"]}>{count}</p>
      <button className={style2.click} onClick={handleClick}>
        click
      </button>
    </div>
  );
}

export default App;
