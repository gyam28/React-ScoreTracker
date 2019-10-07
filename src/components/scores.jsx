import React, { Component } from "react";
import { getScores, createScore } from "../mockScoreAPI";
import TableHeader from "./tableHead";
import TableBody from "./tableBody";
import AddNewButton from "./addnew";

class Scoreboard extends Component {
  state = {
    scores: [],
    columns: [{ label: "Position" }, { label: "Player" }, { label: "Points" }],
    sortOrder: "desc"
  };

  componentDidMount() {
    const unorganisedScores = getScores();
    this.setState({
      scores: this.sortingByScore(unorganisedScores, this.state.sortOrder)
    });
  }

  handleSort = sortOrder => {
    this.setState({
      sortOrder
    });
    this.setState({
      scores: this.sortingByScore(this.state.scores, sortOrder)
    });
  };

  compare(a, b) {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  }

  sortingByScore(list, order) {
    const sortedList = list.sort(this.compare);
    if (order === "desc") return sortedList.reverse();
    return sortedList;
  }
  handleSubmit = (name, point) => {
    const { scores, sortOrder } = this.state;
    const newScore = createScore(name, point);
    const scoreList = scores;
    scoreList.push(newScore);
    const updatedList = this.sortingByScore(scoreList, sortOrder);
    this.setState({
      scores: updatedList
    });
  };

  render() {
    const { columns, sortOrder, scores } = this.state;
    const totalCount = scores.length;

    return totalCount === 0 ? (
      <div>
        <h3>There are no scores to show.</h3>
        <AddNewButton onSubmit={this.handleSubmit} />
      </div>
    ) : (
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        <h3>{"Showing " + totalCount + " ranking results in the list."}</h3>

        <table className="table table-hover">
          <TableHeader
            columns={columns}
            onSort={this.handleSort}
            sortOrder={sortOrder}
          />
          <TableBody scores={scores} sortingOrder={sortOrder} />
        </table>
        <AddNewButton onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Scoreboard;
