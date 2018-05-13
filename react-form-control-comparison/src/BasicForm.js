import React, { Component } from "react";

class BasicForm extends Component {
  constructor() {
    super();
    this.state = {
      values: { formtextInput: "", formSelect: "" },
      touched: {}
    };
  }

  validate = fieldValue => {
    return fieldValue ? "" : "required field";
  };

  handleChange = e => {
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });
  };
  handleBlur = e => {
    this.state.touched[e.target.name] ||
      this.setState({
        touched: { ...this.state.touched, [e.target.name]: true }
      });
  };
  handleSubmit = e => {
    let fieldsTouched = {},
      valid = true;
    for (var value in this.state.values) {
      fieldsTouched[value] = true;
      if (this.validate(this.state.values[value])) {
        valid = false;
      }
    }
    this.setState({ touched: fieldsTouched });
    valid && console.log("submit success");
    e.preventDefault();
  };

  render() {
    const { values, touched } = this.state;
    return (
      <div className="BasicForm">
        <h1>Basic Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="formtextInput">Text Input:</label>
          <input
            name="formtextInput"
            type="text"
            value={values.formtextInput}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <div className="errorMsg">
            {touched.formtextInput && this.validate(values.formtextInput)}
          </div>
          <label htmlFor="formSelect">Select:</label>
          <select
            name="formSelect"
            value={values.formSelect}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          >
            <option value="">select an option</option>
            <option value="1">option A</option>
            <option value="2">option B</option>
          </select>
          <div className="errorMsg">
            {touched.formSelect && this.validate(values.formSelect)}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BasicForm;
