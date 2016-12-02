var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!!!</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;

    var msgRef = this.refs.message;
    var message = msgRef.value;

    if (name.length > 0 && message.length > 0) {
      nameRef.value = '';
      msgRef.value = '';

      this.props.onNewName(name);
      this.props.onNewMessage(message);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Name"/>
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="Message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function(message) {
    this.setState({
      message: message
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

var firstName = "Minh-Long"
var message;

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
