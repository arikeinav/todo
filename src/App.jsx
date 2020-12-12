import { TodoApp } from "./pages/TodoApp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={TodoApp} path="/" />
      </Switch>
    </div>
  );
}

export default App;
