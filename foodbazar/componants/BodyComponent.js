import SearchElement from "./SearchElement";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react"; 

const BodyComponent = () => {
    // State to manage filtered restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
    
    // useEffect(() => {},[]);
    // Use effect takes two parameters, first one is a callback function and second one is dependency array, which is optional.
    // The callback function will be executed after the component is rendered and whenever any of the dependencies in the array change. If the dependency array is empty, the callback will only run once after the initial render.
    useEffect(() => {
        console.log("useEffect called - component mounted");
        // After the components are rendered, callback function will be executed and it will log the message to the console. Since the dependency array is empty, this will only happen once when the component is first mounted.
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "../utils/mockdata.json"  //in future it will use for real api call, for now we are using local json file to fetch data.
        );
        console.log("Data fetched:", data);

        const json = await data.json();
        console.log("All data");
        console.log(json);
        setFilteredRestaurants(json);
    };



    console.log("BodyComponent rendered");
    // in use effect body will be rendered fisrt then the useeffect callback function will be executed.
    // Handler to filter restaurants by rating 4.0+
    const handleFilterByRating = () => {
        const ratedRestaurants = restaurantList.filter((restaurant) => 
            parseFloat(restaurant.rating) >= 4.0
        );
        setFilteredRestaurants(ratedRestaurants);
        console.log("Rating 4.0+ filter applied");
    };
    
    // Handler to filter restaurants by price (Low to High)
    const handleFilterPriceLowToHigh = () => {
        const sortedRestaurants = [...restaurantList].sort((a, b) => 
            parseFloat(a.price) - parseFloat(b.price)
        );
        setFilteredRestaurants(sortedRestaurants);
        console.log("Price Low to High filter applied");
    };
    
    // Handler to filter restaurants by price (High to Low)
    const handleFilterPriceHighToLow = () => {
        const sortedRestaurants = [...restaurantList].sort((a, b) => 
            parseFloat(b.price) - parseFloat(a.price)
        );
        setFilteredRestaurants(sortedRestaurants);
        console.log("Price High to Low filter applied");
    };
    
    // Handler to filter by delivery time (fastest first)
    const handleFilterByDeliveryTime = () => {
        const sortedByTime = [...restaurantList].sort((a, b) => {
            // Extract numbers from delivery time string
            const timeA = parseInt(a.deliveryTime.match(/\d+/)[0]);
            const timeB = parseInt(b.deliveryTime.match(/\d+/)[0]);
            return timeA - timeB;
        });
        setFilteredRestaurants(sortedByTime);
        console.log("Delivery Time filter applied");
    };
    
    // Handler to reset filters
    const handleResetFilters = () => {
        setFilteredRestaurants(restaurantList);
        console.log("All filters reset");
    };


    if (filteredRestaurants.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
        <div className="Search">
            <SearchElement />
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
            {/* This will be a restaurant card section */} 
            {/* {RestaurantList.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.name}
                    name={restaurant.name}
                    image={restaurant.image}
                    cuisine={restaurant.cuisine}
                    rating={restaurant.rating}
                    deliveryTime={restaurant.deliveryTime}
                />
            ))}
            <RestaurantCard name="Burger King" image="https://img.magnific.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg?semt=ais_hybrid&w=740&q=80" cuisine="Burgers, Fast Food" rating="⭐ 4.2 stars" deliveryTime="🕒 25 minutes" />
            
            */}


            {filteredRestaurants.map((restaurant)=>(
                <RestaurantCard 
                key={restaurant.name}
                RestData = {restaurant}
                />
            ))}

            {/* Using useState hook to manage filtered restaurants */}
            {/* Displaying filteredRestaurants from state */}
        </div>
        </>
    )


}
export default BodyComponent;