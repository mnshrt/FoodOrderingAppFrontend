// imports
import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./AddressForm.css";

// AddressForm component
class AddressForm extends Component {
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
          <Input
            fullWidth={true}
            placeholder="State *"
            id="passInput"
            style={{ marginTop: "25px" }}
          />
          <Input
            fullWidth={true}
            placeholder="Pincode *"
            id="passInput"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "70%", marginBottom: "20px" }}
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
