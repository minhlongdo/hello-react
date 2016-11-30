var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  onButtonClick: function(e) {
    //Prevent browser from refreshing the page
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },
  render: function() {
    var name = this.props.name;

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
