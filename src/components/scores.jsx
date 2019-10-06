import React, { Component } from "react";
import { getScores, createScore } from "../mockScoreAPI";
import TableHeader from "./tableHead";
import TableBody from "./tableBody";
import AddNewButton from "./addnew";

class Scoreboard extends Component {
  state = {
    scores: [],
    columns: [
      { label: "Position" },
      { label: "Player", path: "name" },
      { label: "Points", path: "score" }
    ],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "score", order: "desc" }
  };

  componentDidMount() {
    const unorganisedScores = getScores();
    this.setState({
      scores: this.sortingByScore(
        unorganisedScores,
        this.state.sortColumn.order
      )
    });
  }

  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
    this.setState({
      scores: this.sortingByScore(this.state.scores, sortColumn.order)
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
    const { scores, sortColumn } = this.state;
    const newScore = createScore(name, point);
    const scoreList = scores;
    scoreList.push(newScore);
    const updatedList = this.sortingByScore(scoreList, sortColumn.order);
    this.setState({
      scores: updatedList
    });
  };

  render() {
    const { columns, sortColumn, scores } = this.state;
    const totalCount = scores.length;

    return totalCount === 0 ? (
      <React.Fragment>
        <h3>There are no scores to show.</h3>
        <AddNewButton onSubmit={this.handleSubmit} />
      </React.Fragment>
    ) : (
      <div>
        <h3>{"Showing " + totalCount + " ranking results in the list."}</h3>

        <table className="table table-hover">
          <TableHeader
            columns={columns}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <TableBody scores={scores} sortingOrder={sortColumn.order} />
        </table>
        <AddNewButton onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Scoreboard;
