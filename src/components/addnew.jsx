import React, { Component } from "react";
import Joi from "joi-browser";
import { Collapse, Button } from "react-bootstrap";
import Input from "../common/input";

class AddNewButton extends Component {
  state = {
    data: {},
    errors: {},
    opened: false
  };

  schema = {
    player: Joi.string()
      .alphanum()
      .required()
      .min(1)
      .label("Player"),
    points: Joi.number()
      .required()
      .min(0)
      .label("Points")
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    const { data } = this.state;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    e.preventDefault();
    this.props.onSubmit(data.player, data.points);
    e.target.reset();
    this.toggle();
  };

  toggle = e => {
    this.setState({ opened: !this.state.opened });
    console.log(this.state.opened);
  };

  render() {
    return (
      <React.Fragment>
        <p>
          <Button
            className="btn btn-dark btn-block"
            type="button"
            aria-expanded={this.state.opened}
            aria-controls="collapseForm"
            onClick={this.toggle}
          >
            Add New Player Score
          </Button>
        </p>
        <Collapse in={this.state.opened}>
          <div id="collapseForm">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <Input
                    name="player"
                    placeholder="Player name"
                    onChange={this.handleChange}
                    error={this.state.errors["player"]}
                  />
                </div>
                <div className="col">
                  <Input
                    name="points"
                    placeholder="Total score"
                    onChange={this.handleChange}
                    error={this.state.errors["points"]}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    disabled={this.validate()}
                    className="btn btn-dark btn-block"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-dark btn-block"
                    type="reset"
                    onClick={this.toggle}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default AddNewButton;
