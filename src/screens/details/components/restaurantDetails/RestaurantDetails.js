import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "./RestaurantDetails.css";
import Icon from "@material-ui/core/Icon";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantDetails: {}
    };
  }
  render() {
    const details = this.props.restaurantDetails;
    console.log(details);
    return (
      <div className="details">
        <div className="flex-containerDetails">
          <div className="leftDetails">
            <img
              className="restaurantImage"
              src={details.photo_URL}
              alt={details.restauant_name}
            />
          </div>
          <div className="rightDetails">
            <div>
              <Typography variant="h5" component="h5">
                {details.restaurant_name}{" "}
              </Typography>
            </div>
            <div>
              <Typography variant="h5" component="h5">
                {details.address.locality}{" "}
              </Typography>
            </div>
            <div>
              <Typography variant="h6" component="h6">
                {details.categories}{" "}
              </Typography>
            </div>
            <br />
            <div className="flex-countsContainer">
              <div className="countElements">
                <Typography>
                  <span className="bold">
                    <i className="fa fa-star" aria-hidden="true" />
                    {details.customer_rating}
                  </span>
                  <br />
                  <span className="subHeaders">
                    AVERAGE RATING BY
                    <br />
                    {details.number_customers_rated} CUSTOMERS
                  </span>
                </Typography>
              </div>

              <div className="countElements">
                <Typography>
                  <span className="bold">
                    &#8377;&nbsp;{details.average_price}
                  </span>
                  <br />
                  <span className="subHeaders">
                    AVERAGE COST FOR <br />
                    TWO PEOPLE{" "}
                  </span>
                </Typography>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantDetails;
