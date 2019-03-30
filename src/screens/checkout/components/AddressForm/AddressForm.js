// imports
import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import "./AddressForm.css";
import StateSelect from "./StateSelect";
import InputLabel from "@material-ui/core/InputLabel";

// AddressForm component
class AddressForm extends Component {
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
    return (
      <div className="address-form-container">
        <FormControl
          className="address-form"
          style={{ width: "30%", marginLeft: "10px" }}
        >
          <Input
            fullWidth={true}
            placeholder="Flat / Building No.*"
            style={{ marginTop: "25px" }}
          />
          <Input
            fullWidth={true}
            placeholder="Locality *"
            id="passInput"
            style={{ marginTop: "25px" }}
          />
          <Input
            fullWidth={true}
            placeholder="City *"
            id="passInput"
            style={{ marginTop: "25px" }}
          />
          <FormControl>
            <InputLabel
              htmlFor="states"
              style={{ fontWeight: "lighter", color: "grey" }}
            >
              State *
            </InputLabel>
            <StateSelect
              stateNames={this.props.stateNamesList}
              id="states"
              name="states"
              input={<Input id="states" />}
            />
          </FormControl>
          <Input
            fullWidth={true}
            placeholder="Pincode *"
            id="passInput"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "70%", marginBottom: "25px" }}
          >
            Save Address
          </Button>
        </FormControl>
      </div>
    );
  }
}

// Export
export default AddressForm;
