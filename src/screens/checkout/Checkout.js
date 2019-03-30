// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../common/header/Header";
import AddressCard from "./components/AddressCard/AddressCard";
import AddressTabs from "./components/AddressTabs/AddressTabs";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import PlaceOrderCard from "./components/PlaceOrderCard/PlaceOrderCard";
import Payment from "./components/Payment/Payment";
import "./Checkout.css";

const styles = theme => ({
  root: {
    width: "74%",
    marginTop: "5px",
    position: "fixed"
  },
  summary: {
    width: "20%"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

const getSteps = () => {
  return ["Delivery", "Payment"];
};

// const getStepContent = step => {
//   switch (step) {
//     case 0:
//       return <AddressTabs />;
//     case 1:
//       return <Payment paymentMethodsList={}/>;
//     default:
//       return "Uknown step";
//   }
// };

// Checkout Component
class Checkout extends Component {
  state = {
    activeStep: 0,
    payments: [],
    states: [],
    addresses: [],
    accessToken:
      "eyJraWQiOiIzMzdhMzlmMS1mYmU1LTRkMDQtYjcxZi05OGIxMWJkNzI1MDkiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJhY2VmNWY3Yi1lM2RkLTQwOGUtOGI3My1mY2UzM2M2OWQxMjQiLCJpc3MiOiJodHRwczovL0Zvb2RPcmRlcmluZ0FwcC5pbyIsImV4cCI6MTU1Mzk0NiwiaWF0IjoxNTUzOTE3fQ.Rtps8qPr6tZP9UsigpcKdKN2v-ev02j48r7eVdtBQ-amjvcRQkooBSP9y-PL-0RYBlFz1-dIe9EXz7o9Kslnkw"
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getData = async () => {
    // Get payment data
    const api_call = await fetch("http://localhost:8080/api/payment");
    const data = await api_call.json();

    const paymentMethodList = [];

    data.paymentMethods.forEach(element => {
      paymentMethodList.push(element.payment_name);
    });

    this.setState({
      payments: paymentMethodList
    });

    // Get state data
    const states_api_call = await fetch("http://localhost:8080/api/states");
    const stateData = await states_api_call.json();

    const stateNameList = [];

    stateData.states.forEach(element => {
      stateNameList.push(element.state_name);
    });

    this.setState({
      states: stateNameList
    });

    // Get address data
    const addresses_api_call = await fetch(
      "http://localhost:8080/api/address/customer",
      {
        headers: {
          authorization: "Bearer " + this.state.accessToken,
          "content-type": "application/json;charset=UTF-8"
        }
      }
    );

    const addressData = await addresses_api_call.json();

    const addressList = [];

    addressData.addresses.forEach(element => {
      addressList.push(element);
    });

    this.setState({
      addresses: addressList
    });

    console.log(this.state.addresses);
  };

  componentWillMount() {
    this.getData();
  }

  getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <AddressTabs
            stateList={this.state.states}
            address={this.state.addresses}
          />
        );
      case 1:
        return <Payment paymentMethodsList={this.state.payments} />;
      default:
        return "Uknown step";
    }
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div>
        <Header />
        <div style={{ display: "inline-flex" }}>
          <div className="order-summary">
            <PlaceOrderCard className="order-summary" />
          </div>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{this.getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography
                  color="textPrimary"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  View the summary &amp; place your order now!
                </Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                  Change
                </Button>
              </Paper>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object
};

// Export
export default withStyles(styles)(Checkout);
