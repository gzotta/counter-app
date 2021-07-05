import React, { Component } from "react";

//This is a Stateless Functional Component: here we're using a function to create the NavBar component instead of using a class e.g. "class NavBar extends Component {...". Either way works, it's matter of personal preference.
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

/*
Notes: 
- "this.props" only works on class compnents, to use it in functional components, you must add it inside the first set of brackets where the function beings without the "this.".

*/
