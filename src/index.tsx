import React from "react";
import { createRoot } from "react-dom/client";
import App2 from "./app2";

import "./index.scss";
const App = React.lazy(() => import(/* webpackChunkName: "app" */ "./app"));

function Index() {
  return (
    <div>
      <App />
      <App2 />
    </div>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<Index />);
