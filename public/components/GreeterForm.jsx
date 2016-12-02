var React = require('react');

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

module.exports = GreeterForm;
