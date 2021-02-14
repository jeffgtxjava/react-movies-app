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
<<<<<<< HEAD
    <Typography Component="div" style={{ padding: 0, textAlign: "center" }}>
=======
    <Typography Component="div" style={{ padding: 0 }}>
>>>>>>> 0fb2de4c24527e06a2a54b227c48585a706ed918
      {props.children}
    </Typography>
  );
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
    };
  }
  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  tabChangeHandler = (event, value) => {
    this.setState({ value });
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
          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="userName">Username</InputLabel>
              <Input id="userName" type="text" />
            </FormControl>
<<<<<<< HEAD
            <br />
            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            <br />
            <br />
            <Button variant="contained" color="primary">
              LOGIN
            </Button>
=======
>>>>>>> 0fb2de4c24527e06a2a54b227c48585a706ed918
          </TabContainer>
        </Modal>
      </div>
    );
  }
}
export default Header;
