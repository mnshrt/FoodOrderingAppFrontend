// imports
import React, { Component } from "react";
import RestaurantDetails from "./components/restaurantDetails/RestaurantDetails";
import CategoryGridList from "./components/categoryGridList/CategoryGridList";
import MyCartComponent from "./components/myCartComponent/MyCartComponent";
import RestaurantDetails2 from "./components/restaurantDetails/RestaurantDetails2";
import Header from "../../common/header/Header";
import "./Details.css";
import CategoryGridList2 from "./components/categoryGridList/CategoryGridList2";
import PlaceOrderCard from "../../screens/checkout/components/PlaceOrderCard/PlaceOrderCard";

// component
class Details2 extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    restaurantDetails: {},
    addressDetails: {},
    categories: [],
    categoriesArr: [],
    finalCategoryList: [],
    itemCountOnCart: 0,
    itemCartList: []
  };

  getItemData = async () => {
    const apiString = "246165d2-a238-11e8-9077-720006ceb890";
    const api_call_general = await fetch(
      "http://localhost:8080/api/restaurant/" + apiString
    );

    const restaurantIdData = await api_call_general.json();

    console.log(restaurantIdData);

    const categoryItemList = [];

    restaurantIdData.categories.forEach(element => {
      element.item_list.forEach(item => {
        categoryItemList.push([
          element.category_name,
          item.item_name,
          item.id,
          item.price,
          item.item_type
        ]);
      });
    });

    this.setState({
      categoriesArr: categoryItemList
    });

    console.log(this.state.categoriesArr);
  };

  getData = async () => {
    const apiString = "246165d2-a238-11e8-9077-720006ceb890";
    const api_call_general = await fetch(
      "http://localhost:8080/api/restaurant/" + apiString
    );

    const restaurantIdData = await api_call_general.json();

    console.log(restaurantIdData);

    const categoryList = [];
    const categoryList2 = [];

    console.log(restaurantIdData.categories);

    let j = 0;
    restaurantIdData.categories.forEach(element => {
      if (j === restaurantIdData.categories.length - 1) {
        categoryList.push(element.category_name);
      } else {
        categoryList.push(element.category_name + ", ");
        j++;
      }
      categoryList2.push([element.category_name, element.id]);
    });

    this.setState({
      restaurantDetails: restaurantIdData,
      addressDetails: restaurantIdData.address,
      categories: categoryList
    });
    console.log(this.state.restaurantDetails);
    console.log(this.state.categoriesArr);
  };

  addItem = item => {
    //first click isnt getting registered
    console.log(item);
    // let itemCountOnCartUpdate = 1;
    // this.setState({ itemCountOnCart: itemCountOnCartUpdate });
    let currentItemList = this.state.itemCartList;
    currentItemList.push([item, 1]);
    if (item) {
      this.setState({
        itemCartList: currentItemList
      });
    }
    console.log(this.state.itemCountOnCart);
    console.log(this.state.itemCartList);
  };

  componentWillMount() {
    this.getData();
    this.getItemData();
  }

  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "#e6e6e6"
          }}
        >
          <RestaurantDetails2
            details={this.state.restaurantDetails}
            address={this.state.addressDetails}
            categories={this.state.categories}
          />
        </div>
        <div className="flex-categoryCartContainer">
          <div className="categoryContainer" />
          <CategoryGridList2
            details={this.state.restaurantDetails}
            categories={this.state.categories}
            items={this.state.categoriesArr}
            addItem={this.addItem.bind(this)}
          />
        </div>
        <div className="cartContainer">
          <MyCartComponent
            addItem={this.addItem.bind(this)}
            items={this.state.itemCartList}
          />
        </div>
      </div>
    );
  }
}

// export
export default Details2;
