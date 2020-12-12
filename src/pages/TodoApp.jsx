import { todoService } from "../services/todo-service.js";
import { TodoList } from "../cmps/TodoList.jsx";
import { TodoEdit } from "../cmps/TodoEdit.jsx";

export class TodoApp extends React.Component {
  state = {
    todos: [],
    todo: {
      isComplete: false,
      name: "",
    },
    todoToEdit: {},
    isEditOn: false,
  };

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    let todos;
    todoService.query().then((data) => {
      todos = data;
      this.setState({ todos });
      console.log(todos);
    });
  }

  addTodo = () => {
    const todo = this.state.todo;
    todoService.addItem(todo).then(() => {
      this.loadTodos();
      this.state.todo.name = "";
    });
  };
  onDelete = (id) => {
    todoService.deleteItem(id).then(() => {
      this.loadTodos();
    });
  };
  onEditTodo = (todo) => {
    this.state.isEditOn = true;
    this.setState({ todoToEdit: todo });
  };
  updateTodo = (todo) => {
    this.state.isEditOn = false;
    todoService.updateItem(todo).then(() => {
      this.loadTodos();
    });
  };
  onToggleTodo = (todo) => {
    todo.isComplete = !todo.isComplete
    this.updateTodo(todo);
  };

  handleInput = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        todo: {
          ...prevState.todo,
          [field]: value,
        },
      };
    });
  };

  render() {
    const { todo, todos, todoToEdit } = this.state;
    return (
      <div>
        {" "}
        <h1>To-do CRUD</h1>
        <h3>Add</h3>
        <form
          action="javascript:void(0);"
          method="POST"
          onSubmit={this.addTodo}
        >
          <input
            type="text"
            id="add-name"
            name="name"
            value={todo.name}
            placeholder="Enter todo"
            onChange={this.handleInput}
          />
          <input type="submit" value="Add" />
        </form>
        {this.state.isEditOn && (
          <TodoEdit todo={todoToEdit} updateTodo={this.updateTodo} />
        )}
        <p>{todos.length} Todos</p>
        <TodoList
          todos={todos}
          onEditTodo={this.onEditTodo}
          onDelete={this.onDelete}
          onToggleTodo={this.onToggleTodo}
        />
      </div>
    );
  }
}
const containerElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, containerElement);
