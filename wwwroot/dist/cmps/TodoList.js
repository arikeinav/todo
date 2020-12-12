export function TodoList(_ref) {
  var todos = _ref.todos,
      onDelete = _ref.onDelete,
      onEditTodo = _ref.onEditTodo,
      onToggleTodo = _ref.onToggleTodo;

  return React.createElement(
    "table",
    null,
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Is Complete?"
        ),
        React.createElement(
          "td",
          null,
          "Todo"
        ),
        React.createElement(
          "td",
          null,
          "Edit"
        ),
        React.createElement(
          "td",
          null,
          "Delete"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      todos.map(function (todo) {
        return React.createElement(
          "tr",
          { key: todo.id },
          React.createElement(
            "td",
            null,
            React.createElement("input", { type: "checkbox", onChange: function onChange() {
                return onToggleTodo(todo);
              }, checked: todo.isComplete })
          ),
          React.createElement(
            "td",
            null,
            todo.name
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "button",
              { onClick: function onClick() {
                  return onEditTodo(todo);
                } },
              "Edit"
            )
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "button",
              { onClick: function onClick() {
                  return onDelete(todo.id);
                } },
              "Delete"
            )
          )
        );
      })
    )
  );
}