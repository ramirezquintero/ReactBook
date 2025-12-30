import * as ReactDOM from "react-dom/client";

function MyComponent() {
  return(
    <section>
      <h1>My Component</h1>
      <p>This is where the component content would go</p>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyComponent />);

