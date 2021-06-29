import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phoneNumber: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="classForm">
        <form onSubmit={this.handleSubmit}>
          <label className="classLabel">
            First Name: <br />
            <input
              className="classInput"
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder={this.props.firstname}
            />
          </label>
          <br />
          <label className="classLabel">
            Last Name: <br />
            <input
              className="classInput"
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder={this.props.lastname}
            />
          </label>
          <br />
          <label className="classLabel">
            {" "}
            <br />
            Email: <br />
            <input
              className="classInput"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder={this.props.email}
            />
          </label>
          <br /> <br/>
          <div>
            <label className="classLabel">Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              />
              Male
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              />
              Female
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              />
              Other
            </label>
          </div>
          <br />
          <label className="classLabel">
            {" "}
            <br />
            phone Number <br />
            <input
              className="classInput"
              name="phoneNumber"
              type="number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder={this.props.phonenumber}
            />
          </label>
          <br /> <br/>
          <input className="classSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
