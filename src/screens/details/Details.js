import React from 'react';
import RestaurantDetails from './components/restaurantDetails/RestaurantDetails';
import restaurantDetailsData from '../../common/RestaurantData';
import restaurantData from '../../common/RestaurantIdData';
import CategoryGridList from "./components/categoryGridList/CategoryGridList"
class Details extends React.Component{

    constructor(){
        super();
        this.state={
            restaurantDetails:{},
            restaurantIdDetails:{},
            totalSum:0,
            itemOnCart
        }
    }
    componentWillMount(){
        this.setState({restaurantDetails:restaurantDetailsData,
        restaurantIdDetails:restaurantData});
    }
    render(){
        return(
            <div>
                <RestaurantDetails restaurantDetails={this.state.restaurantDetails}/>
                <div className="flex-categoryCartContainer">
                    <CategoryGridList  restaurantIdDetails={this.state.restaurantIdDetails}/>
                    
                </div>
            
            </div>
        );
    }
}
export default Details;