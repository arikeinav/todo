const uri = "api/TodoItems";


export const todoService = {
  query,
  deleteItem,
  addItem,
  toggleTodo,
  updateItem,
};

function query() {
  return fetch(uri)
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.error("Unable to get items.", error));
}
function addItem(item){
  return fetch(uri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .catch((error) => console.error("Unable to add item.", error));
    };

    function deleteItem(id) {
     return  fetch(`${uri}/${id}`, {
          method: 'DELETE'
        })
        
        .catch(error => console.error('Unable to delete item.', error));
      }




function toggleTodo(todoId) {
  var todo = gTodos.find((todo) => todo._id === todoId);
  console.log(todo);
  todo.isDone = !todo.isDone;
}

function updateItem(item) { 
  
  return  fetch(`${uri}/${item.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .catch(error => console.error('Unable to update item.', error));
  
    
  }








