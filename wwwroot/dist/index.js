import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(App, null)
), document.getElementById("root"));

serviceWorker.unregister();