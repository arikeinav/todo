export class TodoEdit extends React.Component {
  state = {
    todo: {
      name: "",
    },
  }

  componentDidMount = () => {
    this.setState({ todo: this.props.todo });
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

  onUpdateTodo = (ev) => {
    ev.preventDefault();
    const todo = this.state.todo;
    this.props.updateTodo(todo);
  };

  render() {
    const { todo } = this.state;
    return (
      <div>
        <h3>Edit</h3>
        <form onSubmit={this.onUpdateTodo}>
          <input type="hidden" id="edit-id" />
          <input
            autoFocus
            type="text"
            value={todo.name}
            onChange={this.handleInput}
            name="name"
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
