import React from 'react';
import Typography from '@material-ui/core/Typography';
import './RestaurantDetails.css';
import Icon from '@material-ui/core/Icon';


class MyCartComponent extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
    }

    componentWillMount(){
       
    }
    render(){

       
        return(
        <div className="details">

            <div className="flex-containerDetails">
                <div className="leftDetails">
                    <img className="restaurantImage" src={restaurantDetails.photo_URL} alt={restaurantDetails.restauant_name} />
                </div>
                <div className="rightDetails">
                    <div>
                        <Typography variant="h5" component="h5">{restaurantDetails.restaurant_name} </Typography>
                    </div>
                    <div>
                        <Typography variant="h5" component="h5">{restaurantDetails.address.locality} </Typography>
                    </div>
                   
               </div>
            </div>
        </div>
        )
    }
}
export default MyCartComponent;