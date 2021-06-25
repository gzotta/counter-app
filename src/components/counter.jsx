import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/*Notes:
- React.Fragment is to group a list of children without adding extra nodes to the DOM.
- Some bootstrap classes used in this code: "badge" is to style the label that displays the count. "badge-primary" is to make the badge blue. "badge-warning" is to make the badge yellow. 
  "m-2" is to set the margin. Class "btn" is a button and "btn-sm" is a small button. 
- getBadgeClasses() is to render the classes depending on the value of the "count" property, yellow if it's zero otherwise blue.
*/
