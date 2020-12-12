import { TodoApp } from "./pages/TodoApp";

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      Switch,
      null,
      React.createElement(Route, { component: TodoApp, path: "/" })
    )
  );
}

export default App;