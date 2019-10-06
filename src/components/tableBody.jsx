import React, { Component } from "react";

class TableBody extends Component {
  render() {
    let counter =
      this.props.sortingOrder === "desc" ? 0 : this.props.scores.length + 1;
    return (
      <tbody>
        {this.props.scores.map(score => (
          <tr key={score._id}>
            <td>
              {
                (counter =
                  counter + (this.props.sortingOrder === "desc" ? 1 : -1))
              }
            </td>
            <td>{score.name}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
