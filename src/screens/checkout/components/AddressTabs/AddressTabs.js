// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AddressCard from "../AddressCard/AddressCard";
import AddressForm from "../AddressForm/AddressForm";
import "./AddressTabs.css";

const TabContainer = props => {
  return (
    <Typography
      component="div"
      style={{ padding: 4 * 5, display: "inline-flex" }}
    >
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

// AddressTabs component
class AddressTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Existing Address" />
            <Tab label="New Address" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <div>
            <TabContainer className="tab-container">
              {" "}
              <AddressCard />
            </TabContainer>
            <TabContainer className="tab-container">
              {" "}
              <AddressCard />
            </TabContainer>
            <TabContainer className="tab-container">
              {" "}
              <AddressCard />
            </TabContainer>
          </div>
        )}
        {value === 1 && (
          <div>
            <AddressForm />
          </div>
        )}
      </div>
    );
  }
}

AddressTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressTabs);
