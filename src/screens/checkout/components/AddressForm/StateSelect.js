// imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

// class
class StateSelect extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    stateName: "",
    name: "hai",
    labelWidth: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const stateNames = this.props.stateNames;
    return (
      <div style={{ marginTop: "7.4%" }}>
        <Select
          fullWidth
          value={this.state.stateName}
          onChange={this.handleChange("stateName")}
          displayEmpty
          inputProps={{
            id: "states"
          }}
          placeholder="State*"
        >
          {stateNames.map(element => (
            <MenuItem value={element}>{element}</MenuItem>
          ))}
        </Select>
      </div>
    );
  }
}

StateSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StateSelect);
