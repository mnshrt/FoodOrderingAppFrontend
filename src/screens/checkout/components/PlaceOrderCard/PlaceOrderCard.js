import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import OrderSnackbar from "../OrderSnackbar/OrderSnackbar";

const styles = {
  card: {
    minWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  }
};

class PlaceOrderCard extends Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            style={{ marginBottom: "20px" }}
          >
            Summary
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
            style={{ marginBottom: "15px", fontWeight: "lighter" }}
          >
            Loud Silence
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <i
              class="far fa-stop-circle"
              style={{ color: "red", marginRight: "10px" }}
            />
            <span style={{ marginRight: "5px" }}>Hakka Noodles</span>{" "}
            <span style={{ marginRight: "40px" }}>1</span> <span>₹204</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <i
              class="far fa-stop-circle"
              style={{ color: "green", marginRight: "10px" }}
            />
            <span style={{ marginRight: "78px" }}>Tea</span>{" "}
            <span style={{ marginRight: "40px" }}>2</span> <span>₹40</span>
          </Typography>
          <Divider style={{ marginTop: "20px" }} />
          <Typography className={classes.title} style={{ marginTop: "20px" }}>
            <span style={{ marginRight: "90px" }}>Net Amount</span>{" "}
            <span>₹280</span>
          </Typography>
        </CardContent>
        <OrderSnackbar />
      </Card>
    );
  }
}

PlaceOrderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlaceOrderCard);
