import SearchElement from "./SearchElement";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const BodyComponent = () => {
    return (
        <>
        <div className="Search">
            <SearchElement />
        </div>

        <div className="filter">
            <button className="filter-btn" >Filter</button>
            <button className="filter-btn" onClick={() =>{
                console.log("Rating 4.0+ clicked")}
                }
                
                >Rating 4.0+</button>
                
            <button className="filter-btn" onClick={() =>{
                console.log("Delivery Time clicked")}
                }>Delivery Time</button>
            <button className="filter-btn" onClick={() =>{
                console.log("Cost: Low to High clicked")}
                }>Cost: Low to High</button>
            <button className="filter-btn" onClick={() =>{
                console.log("Cost: High to Low clicked")}
                }>Cost: High to Low</button>
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


            {restaurantList.map((restaurant)=>(
                <RestaurantCard 
                key={restaurant.name}
                RestData = {restaurant}
                />
            ))}

            {/* This is another way to fetch data in react jsx which call props and props mean parameters passed to a component */}
        </div>
        </>
    )


}

export default BodyComponent