import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){

    super(props)
    this.state = {
      
      text: "Test",
      email: "test@test.com",
      tel: "+0123456789",
      custom: "",
    }

  }
  
    handleChange = (e) =>{
      this.setState({[e.target.id]: e.target.value});
    }
  

  render() {
    return <div className="App">
        <header>
          <h1>native-validation</h1>
        </header>

        <section>
          <form action="#" method="post">
            <div>
              <ul>
                <li>
                  <label htmlFor="text">text Input:</label>
                  <input onChange={this.handleChange} type="text" name="text" id="text" value={this.state.text} required />
                </li>
                <br />
                <li>
                  <label htmlFor="email">email Input:</label>
                  <input onChange={this.handleChange} type="email" name="email" id="email" value={this.state.email} required />
                </li>
                <br />
                <li>
                  <label htmlFor="tel">telephone Input:</label>
                  <input onChange={this.handleChange} type="tel" name="tel" id="tel" value={this.state.tel} required />
                </li>
                <br />
                <li>
                  <label htmlFor="custom">custom Input:</label>
                  <input onChange={this.handleChange} type="text" name="custom" id="custom" value={this.state.custom} required pattern="[0-9]{5}" title="Enter 5 numbers" />
                </li>
              </ul>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
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

          <p>rycu</p>
        </footer>
      </div>;
  }
}

export default App;
