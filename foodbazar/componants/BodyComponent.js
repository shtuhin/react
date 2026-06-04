import SearchElement from "./SearchElement";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react"; 
import Shimmer from "./Shimmer";


const BodyComponent = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        console.log("useEffect called - component mounted");
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
            const data = restaurantList; // Using mock data instead of fetch
            setAllRestaurants(data);
            setFilteredRestaurants(data);
            console.log("Restaurant data fetched successfully");
           
    }     catch(error){
            console.error("Error fetching restaurant data:", error);
        }
};



    console.log("BodyComponent rendered");
    const handleFilterByRating = () => {
        const ratedRestaurants = allRestaurants.filter(
            restaurant => parseFloat(restaurant.rating) >= 4
        );

        setFilteredRestaurants(ratedRestaurants);
    };
    
    const handleFilterPriceLowToHigh = () => {
        const sortedRestaurants = [...allRestaurants].sort((a, b) => 
            parseFloat(a.price) - parseFloat(b.price)
        );
        setFilteredRestaurants(sortedRestaurants);
        console.log("Price Low to High filter applied");
    };
    
    const handleFilterPriceHighToLow = () => {
        const sortedRestaurants = [...allRestaurants].sort((a, b) => 
            parseFloat(b.price) - parseFloat(a.price)
        );
        setFilteredRestaurants(sortedRestaurants);
        console.log("Price High to Low filter applied");
    };
    
    const handleFilterByDeliveryTime = () => {
        const sortedByTime = [...allRestaurants].sort((a, b) => {
            // Extract numbers from delivery time string
            const timeA = parseInt(a.deliveryTime.match(/\d+/)[0]);
            const timeB = parseInt(b.deliveryTime.match(/\d+/)[0]);
            return timeA - timeB;
        });
        setFilteredRestaurants(sortedByTime);
        console.log("Delivery Time filter applied");
    };
    
    const handleResetFilters = () => {
        setFilteredRestaurants(allRestaurants);
        console.log("All filters reset");
    };


    if (allRestaurants.length === 0) {
        return <Shimmer />; // Show shimmer effect while loading or if no restaurants match the filters 
    }
    return (
        <>
        <div className="Search">
            <SearchElement 
            searchText={searchText} 
            setSearchText={setSearchText} 
            allRestaurants={allRestaurants} 
            setFilteredRestaurants={setFilteredRestaurants} />
        </div>

        <div className="filter">
            <h3>Filter</h3>
            <button className="filter-btn" onClick={handleFilterByRating}>
                Rating 4.0+
            </button>
            
            <button className="filter-btn" onClick={handleFilterPriceLowToHigh}>
                Price Low to High
            </button>
            
            <button className="filter-btn" onClick={handleFilterPriceHighToLow}>
                Price High to Low
            </button>
            
            <button className="filter-btn" onClick={handleFilterByDeliveryTime}>
                Delivery Time
            </button>
            
            <button className="filter-btn reset-btn" onClick={handleResetFilters}>
                Reset Filters
            </button>
        </div>


        <div className= "res-container">
           


            {filteredRestaurants.map((restaurant)=>(
                <RestaurantCard 
                key={restaurant.name}
                RestData = {restaurant}
                />
            ))}

          
        </div>
        </>
    )


}
export default BodyComponent;