import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  //this.setState() it's inherited from React's component. This method tells React that we are updating the state, then it'll figure out what part of the state is changed, and based on that it'll bring the DOM in sync with the virtual DOM.
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log("props", this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/*Notes:
- React.Fragment is to group a list of children without adding extra nodes to the DOM.
- Some bootstrap classes used in this code: "badge" is to style the label that displays the count. "badge-primary" is to make the badge blue. "badge-warning" is to make the badge yellow. 
  "m-2" is to set the margin. Class "btn" is a button and "btn-sm" is a small button. 
- getBadgeClasses() is to render the classes depending on the value of the "count" property, yellow if it's zero otherwise blue.
- <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>  jsx expresion to render the tags dynamically.
*/
