var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { todoService } from "../services/todo-service.js";
import { TodoList } from "../cmps/TodoList.js";
import { TodoEdit } from "../cmps/TodoEdit.js";

export var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodoApp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      todos: [],
      todo: {
        isComplete: false,
        name: ""
      },
      todoToEdit: {},
      isEditOn: false
    }, _this.addTodo = function () {
      var todo = _this.state.todo;
      todoService.addItem(todo).then(function () {
        _this.loadTodos();
        _this.state.todo.name = "";
      });
    }, _this.onDelete = function (id) {
      todoService.deleteItem(id).then(function () {
        _this.loadTodos();
      });
    }, _this.onEditTodo = function (todo) {
      _this.state.isEditOn = true;
      _this.setState({ todoToEdit: todo });
    }, _this.updateTodo = function (todo) {
      _this.state.isEditOn = false;
      todoService.updateItem(todo).then(function () {
        _this.loadTodos();
      });
    }, _this.onToggleTodo = function (todo) {
      todo.isComplete = !todo.isComplete;
      _this.updateTodo(todo);
    }, _this.handleInput = function (_ref2) {
      var target = _ref2.target;

      var field = target.name;
      var value = target.value;
      _this.setState(function (prevState) {
        return {
          todo: Object.assign({}, prevState.todo, _defineProperty({}, field, value))
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTodos();
    }
  }, {
    key: "loadTodos",
    value: function loadTodos() {
      var _this2 = this;

      var todos = void 0;
      todoService.query().then(function (data) {
        todos = data;
        _this2.setState({ todos: todos });
        console.log(todos);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          todo = _state.todo,
          todos = _state.todos,
          todoToEdit = _state.todoToEdit;

      return React.createElement(
        "div",
        null,
        " ",
        React.createElement(
          "h1",
          null,
          "To-do CRUD"
        ),
        React.createElement(
          "h3",
          null,
          "Add"
        ),
        React.createElement(
          "form",
          {
            action: "javascript:void(0);",
            method: "POST",
            onSubmit: this.addTodo
          },
          React.createElement("input", {
            type: "text",
            id: "add-name",
            name: "name",
            value: todo.name,
            placeholder: "Enter todo",
            onChange: this.handleInput
          }),
          React.createElement("input", { type: "submit", value: "Add" })
        ),
        this.state.isEditOn && React.createElement(TodoEdit, { todo: todoToEdit, updateTodo: this.updateTodo }),
        React.createElement(
          "p",
          null,
          todos.length,
          " Todos"
        ),
        React.createElement(TodoList, {
          todos: todos,
          onEditTodo: this.onEditTodo,
          onDelete: this.onDelete,
          onToggleTodo: this.onToggleTodo
        })
      );
    }
  }]);

  return TodoApp;
}(React.Component);
var containerElement = document.getElementById("root");
ReactDOM.render(React.createElement(TodoApp, null), containerElement);