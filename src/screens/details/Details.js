import React from "react";
import RestaurantDetails from "./components/restaurantDetails/RestaurantDetails";
import CategoryGridList from "./components/categoryGridList/CategoryGridList";
import MyCartComponent from "./components/myCartComponent/MyCartComponent";
import "./Details.css";

class Details extends React.Component {
  //get the clicked restaurant object from Home.js in props
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.state = {
      restaurantDetails: {},
      restaurantIdDetails: {},
      totalAmount: 0,
      totalCount: 0,
      itemCountOnCart: {}
    };
  }

  //   state = {
  //     restaurantDetails: {},
  //     restaurantIdDetails: {},
  //     totalAmount: 0,
  //     totalCount: 0,
  //     itemCountOnCart: {}
  //   };

  getRestaurantIdData = async () => {
    const apiString = "246165d2-a238-11e8-9077-720006ceb890";
    const api_call_general = await fetch(
      "http://localhost:8080/api/restaurant/" + apiString
    );
    const restaurantIdData = await api_call_general.json();

    this.setState({
      restaurantIdDetails: restaurantIdData
    });

    console.log(restaurantIdData);
    console.log(this.state.restaurantIdDetails);
  };

  addItem = item => {
    //first click isnt getting registered
    console.log(item);
    let itemCountOnCart = { ...this.state.itemCountOnCart };
    itemCountOnCart[item.id] = itemCountOnCart[item.id] + 1 || 1;
    this.setState({ itemCountOnCart: itemCountOnCart });
    console.log(this.state.itemCountOnCart);
  };

  componentWillMount() {
    this.getRestaurantIdData();
  }
  render() {
    return (
      <div>
        <RestaurantDetails restaurantDetails={this.state.restaurantIdDetails} />
        <div className="flex-categoryCartContainer">
          <div className="categoryContainer">
            {" "}
            <CategoryGridList
              addItem={this.addItem.bind(this)}
              restaurantIdDetails={this.state.restaurantIdDetails}
            />
          </div>
          <div className="cartContainer">
            <MyCartComponent
              addItem={this.addItem}
              itemCountOnCart={this.state.itemCountOnCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
