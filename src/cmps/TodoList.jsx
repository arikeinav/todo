export function TodoList({ todos, onDelete, onEditTodo, onToggleTodo }) {
  return (
    <table>
      <thead>
        
        <tr>
          <td>Is Complete?</td>
          <td>Todo</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody >
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>
              <input type="checkbox" onChange={() => onToggleTodo(todo)} checked={todo.isComplete}/>
            </td>
            <td>{todo.name}</td>
            <td>
              <button onClick={() => onEditTodo(todo)}>Edit</button>
            </td>
            <td>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
