var uri = "api/TodoItems";

export var todoService = {
  query: query,
  deleteItem: deleteItem,
  addItem: addItem,
  updateItem: updateItem
}

function query() {
  return fetch(uri).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  }).catch(function (error) {
    return console.error("Unable to get items.", error);
  });
}
function addItem(item) {
  return fetch(uri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  }).then(function (response) {
    return response.json();
  }).catch(function (error) {
    return console.error("Unable to add item.", error);
  });
};

function deleteItem(id) {
  return fetch(uri + "/" + id, {
    method: 'DELETE'
  }).catch(function (error) {
    return console.error('Unable to delete item.', error);
  });
}



function updateItem(item) {

  return fetch(uri + "/" + item.id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).catch(function (error) {
    return console.error('Unable to update item.', error);
  });
}