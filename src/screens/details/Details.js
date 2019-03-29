import React from 'react';
import RestaurantDetails from '../details/components/RestaurantDetails';
import restaurantDetailsData from '../../common/RestaurantData';
class Details extends React.Component{

    constructor(){
        super();
        this.state={
            restaurantDetails:{}
        }
    }
    componentWillMount(){
        this.setState({restaurantDetails:restaurantDetailsData});
    }
    render(){
        return(
            <RestaurantDetails restaurantDetails={this.state.restaurantDetails}/>
        );
    }
}
export default Details;