import * as ReactDOM from "react-dom/client";

import MySection from "./MySection.jsx"
import MyButton from "./MyButton.jsx";

function MyComponent() {
  return(
    <section>
      <h1>My Component</h1>
      <p>This is where the component content would go</p>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MySection>
    <MyButton>This is the button</MyButton>
  </MySection>
);

