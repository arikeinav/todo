import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
