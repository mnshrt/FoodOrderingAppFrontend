// imports
import React, { Component } from "react";
import { withStyles, withTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Modal from "@material-ui/core/Modal";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InputIcon from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FastFood from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import "./Header.css";
import { Button, InputAdornment } from "@material-ui/core";

function TabContainer(props) {
  return <div className="tab-container">{props.children}</div>;
}

const styles = {
  underline: {
    "&:after": {
      height: "2px",
      backgroundColor: "white"
    }
  }
};

class Header extends Component {
  state = {
    modalOpen: false,
    value: 0
  };

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="header-container">
        <AppBar className="navbar" position="static">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              container
              style={{ alignItems: "center" }}
              spacing={24}
            >
              <Grid item>
                <FastFood className="navbar-brand" />
              </Grid>
              <Grid item>
                <div className="search-bar-container">
                  <Input
                    classes={{
                      underline: classes.underline
                    }}
                    className="search-bar"
                    fullWidth={true}
                    placeholder="Search by Restaurant Name"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={this.handleOpenModal}>
                  <AccountCircle style={{ marginRight: "5px" }} />
                  Login
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="header-modal"
          open={this.state.modalOpen}
          onClose={this.handleCloseModal}
        >
          <div class="modal-container">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Login" />
              <Tab label="Signup" />
            </Tabs>
            {value === 0 && (
              <TabContainer>
                <FormControl className="login-form">
                  <Input fullWidth={true} placeholder="Contact No.*" />
                  <Input
                    fullWidth={true}
                    placeholder="Password*"
                    id="passInput"
                    style={{ marginTop: "10%", marginBottom: "10%" }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn-login"
                    style={{ marginTop: "20%" }}
                  >
                    Login
                  </Button>
                </FormControl>
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer>
                <FormControl className="login-form">
                  <Input fullWidth={true} placeholder="First Name *" />
                  <Input
                    fullWidth={true}
                    placeholder="Last Name"
                    id="passInput"
                    style={{ marginTop: "10%" }}
                  />
                  <Input
                    fullWidth={true}
                    placeholder="Email *"
                    id="passInput"
                    style={{ marginTop: "10%" }}
                  />
                  <Input
                    fullWidth={true}
                    placeholder="Password *"
                    id="passInput"
                    style={{ marginTop: "10%" }}
                  />
                  <Input
                    fullWidth={true}
                    placeholder="Contact No. *"
                    id="passInput"
                    style={{ marginTop: "10%", marginBottom: "10%" }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn-login"
                    style={{ marginTop: "20%" }}
                  >
                    Signup
                  </Button>
                </FormControl>
              </TabContainer>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

// export
export default withStyles(styles)(Header);
