import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
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
