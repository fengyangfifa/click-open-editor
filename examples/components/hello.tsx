import React from "react";

import "./hello.scss";
import web from "@/assets/web.webp";
import { HelloProps } from "./he";

function Hello(props: HelloProps) {
  const a = 1;
  console.log(props);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div className="hello" onClick={handleClick}>
      hello-{a}
      <img src={web} alt="" />
    </div>
  );
}

export default Hello;
