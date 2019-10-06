import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = () => {
    const sortOrder = this.props.sortOrder;
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    this.props.onSort(newOrder);
  };

  renderSortIcon = () => {
    const { sortOrder } = this.props;
    if (sortOrder === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.label}
              onClick={
                column.label === "Points" ? () => this.raiseSort() : null
              }
            >
              {column.label}{" "}
              {column.label === "Points" ? this.renderSortIcon() : null}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
