import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";


// use in real world 
// resinfo?.cards[0]?.card?.card?.info?.name

const RestaurantMenu = () =>  {
    const [resInfo, setresInfo] = useState([]);
    useEffect(() => {
        //API call to fetch restaurant menu data
        console.log("Fetching restaurant menu data...");
        // Simulate API call with setTimeout
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = () => {
        setTimeout(() => {
            console.log("Restaurant menu data fetched successfully");
            // Here you would typically update state with the fetched data
        }, 2000);
    };

  
    return (resInfo.length === 0) ? <Shimmer /> : (
        <div className = "restaurant-menu">
            <h1>Name of Restaurant</h1>
                <h2>Menu</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;