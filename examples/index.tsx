import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App2 from "./app2";
import "antd/dist/reset.css";

import "./index.scss";
import { ClickOpenEditor } from "../packages/click-open-editor/src";
const App = React.lazy(() => import(/* webpackChunkName: "app" */ "./app"));

function Index() {
  return (
    <div>
      <Suspense>
        <App />
      </Suspense>
      <App2 />
      <ClickOpenEditor />
    </div>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<Index />);
