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
    };
  }
  openModalHandler = () => {
    this.setState({
      modalIsOpen: true,
      value: 0,
      userNameRequired: "dispNone",
      userName: "",
      passwordRequired: "dispNone",
      password: "",
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
    this.state.password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });
  };

  inputUserNameChangeHandler = (e) => {
    this.setState({ userName: e.target.value });
  };
  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
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
              <FormControl className={this.state.passwordRequired}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  password={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
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
        </Modal>
      </div>
    );
  }
}
export default Header;
