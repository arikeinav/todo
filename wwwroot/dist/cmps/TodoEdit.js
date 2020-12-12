var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var TodoEdit = function (_React$Component) {
  _inherits(TodoEdit, _React$Component);

  function TodoEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodoEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoEdit.__proto__ || Object.getPrototypeOf(TodoEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      todo: {
        name: ""
      }
    }, _this.componentDidMount = function () {
      _this.setState({ todo: _this.props.todo });
    }, _this.handleInput = function (_ref2) {
      var target = _ref2.target;

      var field = target.name;
      var value = target.value;
      _this.setState(function (prevState) {
        return {
          todo: Object.assign({}, prevState.todo, _defineProperty({}, field, value))
        };
      });
    }, _this.onUpdateTodo = function (ev) {
      ev.preventDefault();
      var todo = _this.state.todo;
      _this.props.updateTodo(todo);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodoEdit, [{
    key: "render",
    value: function render() {
      var todo = this.state.todo;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Edit"
        ),
        React.createElement(
          "form",
          { onSubmit: this.onUpdateTodo },
          React.createElement("input", { type: "hidden", id: "edit-id" }),
          React.createElement("input", {
            autoFocus: true,
            type: "text",
            value: todo.name,
            onChange: this.handleInput,
            name: "name"
          }),
          React.createElement("input", { type: "submit", value: "Save" })
        )
      );
    }
  }]);

  return TodoEdit;
}(React.Component);