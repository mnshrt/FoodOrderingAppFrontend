import React from "react";
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: [],
      reduceCols: 0
    };
  }

  getData = async () => {
    const api_call_general = await fetch(
      "http://localhost:8080/api/restaurant"
    );

    const restaurantIdData = await api_call_general.json();

    console.log(restaurantIdData);

    if (restaurantIdData) {
      this.setState({
        restaurantData: [JSON.stringify(restaurantIdData)]
      });
    }

    console.log(this.state.restaurantData);

    // const categoryList = [];
    // const categoryList2 = [];

    // console.log(restaurantIdData.categories);

    // let j = 0;
    // restaurantIdData.categories.forEach(element => {
    //   if (j === restaurantIdData.categories.length - 1) {
    //     categoryList.push(element.category_name);
    //   } else {
    //     categoryList.push(element.category_name + ", ");
    //     j++;
    //   }
    //   categoryList2.push([element.category_name, element.id]);
    // });
  };

  componentWillMount() {
    this.getData();
    console.log(this.state.restaurantData);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let colsNumber = 0;
    if (window.innerWidth <= 600) {
      colsNumber = 2;
    } else if (window.innerWidth <= 900) {
      colsNumber = 3;
    } else {
      colsNumber = 4;
    }
    this.setState({ reduceCols: colsNumber });
  }

  openRestaurantDetails = restaurant => {
    //route to the details js passing in the restaurant object
    console.log(restaurant);
  };

  render() {
    let { classes } = this.props;
    const restaurantData = this.state.restaurantData;
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <GridList
            cellHeight={400}
            cols={this.state.reduceCols}
            className={classes.gridListMain}
          >
            {this.state.restaurantData.restaurants.map(restaurant => (
              <GridListTile
                className="restaurant-grid-item"
                key={"grid" + restaurant.id}
                onClick={() => this.openRestaurantDetails(restaurant)}
              >
                <RestaurantCard currentRestaurant={restaurant} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
