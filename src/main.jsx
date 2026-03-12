import * as ReactDOM from "react-dom/client";
import { useState } from "react";

import WithoutFragments from "./WithoutFragments";
import WithFragments from "./WithFragments";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>
);