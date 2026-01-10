import * as ReactDOM from "react-dom/client";
import { useState } from "react";

const enabled = false;
const text = "A Button";
const placeholder = "Please input something";
const size = 50;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size} />
  </section>
);