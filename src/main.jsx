import * as ReactDOM from "react-dom/client";

var clicked = 0; 

const handleClick= () => {
  clicked++;
  console.log("Button clicked")
  console.log(clicked)
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <button onClick={handleClick}>Click me</button>
    <p>times clicked: {clicked}</p>
  </section>
)