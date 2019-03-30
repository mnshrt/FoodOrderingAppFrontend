import React from 'react';
import RestaurantDetails from './components/restaurantDetails/RestaurantDetails';
import restaurantDetailsData from '../../common/RestaurantData';
import restaurantData from '../../common/RestaurantIdData';
import CategoryGridList from "./components/categoryGridList/CategoryGridList"
import MyCartComponent from './components/myCartComponent/MyCartComponent';
import "./Details.css";
class Details extends React.Component{

    constructor(){
        super();
        //making the method a property of the class
        this.addItem= this.addItem.bind(this);
        this.state={
            restaurantDetails:{},
            restaurantIdDetails:{},
            totalAmount:0,
            totalCount:0,
            itemCountOnCart:{}
        }
    }
    componentWillMount(){
        this.setState({restaurantDetails:restaurantDetailsData,
        restaurantIdDetails:restaurantData});
    }
    getMediaData = async () => {
        const api_call_general= await fetch(
            'http://localhost:8080/api/'+ACCESS_TOKEN
            );
        const mediaData = await api_call_general.json();
        if(mediaData){
            this.setState({imagePostsData:mediaData.data});
            console.log(mediaData.data[0].images.standard_resolution.url);
        }
    }
    addItem(item){

        //first click isnt getting registered
        console.log(item);
        let itemCountOnCart={...this.state.itemCountOnCart}
        itemCountOnCart[item.id]=itemCountOnCart[item.id] + 1 || 1;
        this.setState({itemCountOnCart:itemCountOnCart});
        console.log(this.state.itemCountOnCart);
    }
    
    render(){
        return(
            <div>
                <RestaurantDetails restaurantDetails={this.state.restaurantDetails}/>
                <div className="flex-categoryCartContainer">
                   <div className="categoryContainer" > <CategoryGridList addItem={this.addItem} restaurantIdDetails={this.state.restaurantIdDetails}/></div>
                   <div className="cartContainer"><MyCartComponent addItem={this.addItem} itemCountOnCart={this.state.itemCountOnCart}/></div>
                </div>
            
            </div>
        );
    }
}
export default Details;