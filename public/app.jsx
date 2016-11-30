var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    //Prevent browser from refreshing the page
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    // Set string in input to empty
    nameRef.value = '';

    if (typeof name == 'string' && name.length > 0) {
      /*
        Need to use a setter to be able to set state of the React component,
        will re-render the part of the component that has changed.
      */
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>This is from a component</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = "Minh-Long"

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
