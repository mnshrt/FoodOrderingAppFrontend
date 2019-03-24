// imports
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Modal from "@material-ui/core/Modal";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
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
    modalOpen: false
  };

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="header-container">
        <AppBar className="navbar" position="static">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              container
              style={{ alignItems: "center" }}
              spacing={10}
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
                    fullWidth="true"
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
      </div>
    );
  }
}

// export
export default withStyles(styles)(Header);
