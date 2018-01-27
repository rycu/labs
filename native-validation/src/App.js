import React, { Component } from 'react';
import './App.css';
import { getSupport } from "caniuse-api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitMsg: null,
      text: "Test",
      email: "test@test.com",
      tel: "+0123456789",
      custom: "12345",
      checkBox: true,
      radio: "1",
      select: "option1",
      browserSupport: {
       formValidation: getSupport("form-validation"),
       pattern: getSupport("pattern"),
      }
    };
  }

  handleChange = e => {
    switch (e.target.type) {
      case "checkbox":
        this.setState({
          [e.target.name]: !this.state[e.target.name],
          submitMsg: null
        });
        break;
      default:
        this.setState({
          [e.target.name]: e.target.value,
          submitMsg: null
        });
        break;
    }
  };

  handleSubmit = e => {
    this.setState({ submitMsg: "Submit Sucsess!" });
    e.preventDefault();
  };

  handleClearRadios = () => {
    this.setState({ radio: null });
  };

  bulidChart = () => {
    
   const browserObj = this.state.browserSupport.formValidation;
   let browserRows = [];
   for (let prop in browserObj) {

        //console.log(prop, ': ' ,browserObj[prop].y);

        browserRows.push(<tr>
            <td>{prop}</td>
            <td>N: {browserObj[prop].n}</td>
            <td>Y: {browserObj[prop].y}</td>
          </tr>);
    }

    return browserRows;
  }


  render() {

   // console.log();

    return <div className="App">
        <header>
          <h1>native-validation</h1>
        </header>
        <section>
          <form onSubmit={this.handleSubmit}>
            <div>
              <ul>
                <li>
                  <label htmlFor="text">text Input:</label>
                  <input onChange={this.handleChange} type="text" name="text" id="text" value={this.state.text} required />
                </li>
                <li>
                  <label htmlFor="email">email Input:</label>
                  <input onChange={this.handleChange} type="email" name="email" id="email" value={this.state.email} required />
                </li>
                <li>
                  <label htmlFor="tel">telephone Input:</label>
                  <input onChange={this.handleChange} type="tel" name="tel" id="tel" value={this.state.tel} required />
                </li>
                <li>
                  <label htmlFor="custom">custom Input:</label>
                  <input onChange={this.handleChange} type="text" name="custom" id="custom" value={this.state.custom} required pattern="[0-9]{5}" title="Enter 5 numbers" />
                </li>
                <li>
                  <label htmlFor="checkBox">check box:</label>
                  <input onChange={this.handleChange} type="checkbox" name="checkBox" id="checkBox" checked={this.state.checkBox} required />
                </li>
                <li>
                  <fieldset>
                    <legend> radio </legend>
                    <label>
                      <input onChange={this.handleChange} type="radio" name="radio" id="radio1" value="1" checked={this.state.radio === "1"} required />
                      1
                    </label>
                    <label>
                      <input onChange={this.handleChange} type="radio" name="radio" id="radio2" value="2" checked={this.state.radio === "2"} required />
                      2
                    </label>
                    <label>
                      <input onChange={this.handleChange} type="radio" name="radio" id="radio3" value="3" checked={this.state.radio === "3"} required />
                      3
                    </label>
                  </fieldset>
                  <button onClick={this.handleClearRadios}>
                    clear radios
                  </button>
                </li>
                <li>
                  <label htmlFor="select">select:</label>
                  <select onChange={this.handleChange} name="select" id="select" value={this.state.select} required>
                    <option value="">please select an option</option>
                    <option value="option1">option 1</option>
                    <option value="option2">option 2</option>
                    <option value="option3">option 3</option>
                  </select>
                </li>
              </ul>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          {this.state.submitMsg && <h3>{this.state.submitMsg}</h3>}
        </section>
        <section>
          <h3>Coverage:</h3>
          <table>{this.bulidChart()}</table>
        </section>
        <footer>
          <h3>References:</h3>
          <ul>
            <li>
              <a href="https://www.w3.org/WAI/tutorials/forms/validation/">
                https://www.w3.org/WAI/tutorials/forms/validation/
              </a>
            </li>
            {/* Forms frequently include required input that needs to be clearly identified using labels. Also, the required attribute can be added to form controls, to programmatically indicate that they are required. Most current web browsers support this attribute and will communicate missing required input to the user, using standard web browser dialog mechanisms. These dialogs are expected to respect the settings and preferences of the user in the web browser (and operating system), such as default font-size, colors, and language. --> */}
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel">
                https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation">
                https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
              </a>
            </li>
          </ul>

          <p>github.com/rycu/labs/native-validation</p>
        </footer>
      </div>;
  }
}

export default App;
