import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //value={counter.value}
            //id={counter.id}
            counter={counter} //this 'counter' object includes 'value'and 'id', and any other property that will be added in the future.
          />
        ))}
      </div>
    );
  }
}

export default Counters;
