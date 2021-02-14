import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from "react-modal";
import { Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import ReactDOM from "react-dom";
import BookShow from "../../screens/bookshow/BookShow";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
  },
};

const TabContainer = function (props) {
  return (
    <Typography Component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      userName: "",
      userNameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      firstName: "",
      lastName: "",
      email: "",
      registerPassword: "",
      contact: "",
      firstNameRequired: "dispNone",
      lastNameRequired: "dispNone",
      emailRequired: "dispNone",
      registerPasswordRequired: "dispNone",
      contactRequired: "dispNone",
    };
  }
  openModalHandler = () => {
    this.setState({
      modalIsOpen: true,
      value: 0,
      userNameRequired: "dispNone",
      userName: "",
      loginPasswordRequired: "dispNone",
      loginPassword: "",
      firstName: "",
      lastName: "",
      email: "",
      registerPassword: "",
      contact: "",
      firstNameRequired: "dispNone",
      lastNameRequired: "dispNone",
      emailRequired: "dispNone",
      registerPasswordRequired: "dispNone",
      contactRequired: "dispNone",
    });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };

  loginClickHandler = () => {
    this.state.userName === ""
      ? this.setState({ userNameRequired: "dispBlock" })
      : this.setState({ userNameRequired: "dispNone" });
    this.state.loginPassword === ""
      ? this.setState({ loginPasswordRequired: "dispBlock" })
      : this.setState({ loginPasswordRequired: "dispNone" });
  };

  inputUserNameChangeHandler = (e) => {
    this.setState({ userName: e.target.value });
  };
  inputLoginPasswordChangeHandler = (e) => {
    this.setState({ loginPassword: e.target.value });
  };

  registerClickHandler = () => {
    this.state.firstName === ""
      ? this.setState({ firstNameRequired: "dispBlock" })
      : this.setState({ firstNameRequired: "dispNone" });
    this.state.lastName === ""
      ? this.setState({ lastNameRequired: "dispBlock" })
      : this.setState({ lastNameRequired: "dispNone" });
    this.state.email === ""
      ? this.setState({ emailRequired: "dispBlock" })
      : this.setState({ emailRequired: "dispNone" });
    this.state.registerPassword === ""
      ? this.setState({ registerPasswordRequired: "dispBlock" })
      : this.setState({ registerPasswordRequired: "dispNone" });
    this.state.contact === ""
      ? this.setState({ contactRequired: "dispBlock" })
      : this.setState({ contactRequired: "dispNone" });
  };

  inputFirstNameChangeHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };

  inputLastNameChangeHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };

  inputEmailChangeHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  inputRegisterPasswordChangeHandler = (e) => {
    this.setState({ registerPassword: e.target.value });
  };

  inputContactChangeHandler = (e) => {
    this.setState({ contact: e.target.value });
  };

  bookShowHandler = (e) => {
    ReactDOM.render(<BookShow />, document.getElementById("root"));
  };

  render() {
    return (
      <div>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="login-button">
            <Button
              variant="contained"
              color="default"
              onClick={this.openModalHandler}
            >
              Login
            </Button>
          </div>
          {this.props.showBookShowButton === "true" ? (
            <div className="bookshow-button">
              <Button
                variant="contained"
                color="primary"
                onClick={this.bookShowHandler}
              >
                Book Show
              </Button>
            </div>
          ) : (
            ""
          )}
        </header>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
          style={customStyles}
        >
          <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="userName">Username</InputLabel>
                <Input
                  id="userName"
                  type="text"
                  userName={this.state.userName}
                  onChange={this.inputUserNameChangeHandler}
                />
                <FormHelperText className={this.state.userNameRequired}>
                  <span className="red"> Required</span>
                </FormHelperText>
              </FormControl>

              <br />
              <FormControl className={this.state.loginPasswordRequired}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  password={this.state.loginPassword}
                  onChange={this.inputLoginPasswordChangeHandler}
                />
                <FormHelperText className={this.state.loginPasswordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </TabContainer>
          )}

          {this.state.value === 1 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="firstName">Firstname</InputLabel>
                <Input
                  type="text"
                  id="firstName"
                  firstName={this.state.firstName}
                  onChange={this.inputFirstNameChangeHandler}
                />
                <FormHelperText className={this.state.firstNameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="lastName">Lastname</InputLabel>
                <Input
                  type="text"
                  id="lastName"
                  lastName={this.state.lastName}
                  onChange={this.inputLastNameChangeHandler}
                />
                <FormHelperText className={this.state.lastNameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  type="email"
                  id="email"
                  email={this.state.email}
                  onChange={this.inputEmailChangeHandler}
                />
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="registerPassword">Password</InputLabel>
                <Input
                  type="password"
                  id="registerPassword"
                  registerPassword={this.state.registerPassword}
                  onChange={this.inputRegisterPasswordChangeHandler}
                />
                <FormHelperText className={this.state.registerPasswordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="contact">Contact No.</InputLabel>
                <Input
                  type="text"
                  id="contact"
                  contact={this.state.contact}
                  onChange={this.inputContactChangeHandler}
                />
                <FormHelperText className={this.state.contactRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.registerClickHandler}
              >
                Register
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}
export default Header;
