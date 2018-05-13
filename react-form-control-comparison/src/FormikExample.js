import React, { Component } from "react";
import { Formik } from "formik";

class FormikExample extends Component {
  validate = values => {
    let errors = {};
    if (!values.formtextInput) {
      errors.formtextInput = "required field";
    }
    if (!values.formSelect) {
      errors.formSelect = "required field";
    }
    return errors;
  };

  handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log("submit success");
  };

  render() {
    return (
      <div className="FormikExample">
        <h1>Formik Example</h1>
        <Formik
          initialValues={{ formtextInput: "", formSelect: "" }}
          validate={this.validate}
          onSubmit={this.handleSubmit}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="formtextInput">Text Input:</label>
              <input
                type="text"
                name="formtextInput"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.formtextInput &&
                errors.formtextInput && (
                  <div className="errorMsg">{errors.formtextInput}</div>
                )}
              <label htmlFor="formSelect">Select:</label>
              <select
                name="formSelect"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              >
                <option value="">select an option</option>
                <option value="1">option A</option>
                <option value="2">option B</option>
              </select>
              {touched.formSelect &&
                errors.formSelect && (
                  <div className="errorMsg">{errors.formSelect}</div>
                )}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default FormikExample;
