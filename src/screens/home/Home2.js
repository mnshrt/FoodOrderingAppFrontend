// imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import RestaurantCard from "../home/components/RestaurantCard";
import Header from "../../common/header/Header";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    transition: "color .3s ease"
  },
  gridList: {
    width: 1000,
    height: 900
  }
});

// class
class Home2 extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    restaurantData: [],
    reduceCols: 0
  };

  getData = async () => {
    const api_call_general = await fetch(
      "http://localhost:8080/api/restaurant"
    );

    const restaurantIdData = await api_call_general.json();

    console.log(restaurantIdData);

    if (restaurantIdData) {
      this.setState({
        restaurantData: [restaurantIdData]
      });
    }

    console.log(this.state.restaurantData);
  };

  componentWillMount() {
    this.getData();
    // console.log(this.state.restaurantData);
    // window.addEventListener("resize", this.resize.bind(this));
    // this.resize();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <GridList
            cellHeight={400}
            cols={this.state.reduceCols}
            className={classes.gridListMain}
          >
            {/* {this.state.restaurantData[0].restaurants}
            {/* {this.state.restaurantData.restaurants.map(restaurant => (
              <GridListTile
                className="restaurant-grid-item"
                key={"grid" + restaurant.id}
                onClick={() => this.openRestaurantDetails(restaurant)}
              >
                <RestaurantCard currentRestaurant={restaurant} />
              </GridListTile>
            ))} */}{" "}
            */}
          </GridList>
        </div>
      </div>
    );
  }
}

// exports
export default withStyles(styles)(Home2);
