import React, { Component } from "react";
import { useRouteMatch } from "react-router-dom";
import ApiService from "../service/BoardService";
import AuthService from "../service/AuthService";
import axios from "axios";
import { API_URL } from "../service/ApiUrl";

const LOGIN_API_URL = API_URL + "authenticate";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.userLogin = this.userLogin.bind(this);

    this.state = {
      username: "",
      password: "",
      message: null,
      loggedIn: false,
      error: false,
    };
  }

  handleusernameChange = (event) => {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleError = () => {
    this.setState({
      error: false,
    });
  };

  userLogin = (e) => {
    e.preventDefault();
    const reqBody = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post(LOGIN_API_URL, reqBody)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.jwt);
        // var token = JSON.stringify(response.data);
        // token = token.slice(7, -1);
        ApiService.fetchToken(response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.jwt));
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.log("error");
      });
    // axios
    //   .post("http://localhost:8080/authenticate", reqBody)
    //   .then((response) => {
    //     const history = this.props.history;

    //     AuthService.login(
    //       () => {
    //         history.push("/home");
    //       },
    //       response.data.token,
    //       response.data.firstName,
    //       response.data.credentials
    //     );
    //     this.setState({
    //       loggedIn: true,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.setState({
    //       username: "",
    //       password: "",
    //       error: true,
    //     });
    //   });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  gotoFindIDPW=()=>{
    return this.props.history.push('/find')
  }
  gotoSignup=()=>{
    return this.props.history.push('/Signup')
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Login </h2>
        <form>
        <div className="about-content mt-40">
          <div className="about-form">
           
            <input
              type="text"
              placeholder="username"
              name="username"
              
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="about-form">
           
            <input
              type="password"
              placeholder="password"
              name="password"
           
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

         </div>
          <button style={{marginLeft:"300px"}} className="main-btn" type="submit" onClick={this.userLogin}>
            Login User
          </button>
          <button className="main-btn" style={{marginLeft:"150px"}} onClick={this.gotoFindIDPW}>
                ID/PW 찾기
          </button>
          <button className="main-btn" style={{marginLeft:"150px"}} onClick={this.gotoSignup}>
                회원가입
          </button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;