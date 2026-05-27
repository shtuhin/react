import SearchElement from "./SearchElement";
import RestaurantCard from "./RestaurantCard";
import { CONTENT_IMAGE } from "../utils/contents";
import { useState } from "react";
import restaurantList from "../utils/mockData";
const BodyComponentTest = () => {
    // const [ListOfRestaurantsForFiltering, setListOfRestaurantsForFiltering] =
    //     useState([
    //         {
    //             name: "PizzaPurg",
    //             image: CONTENT_IMAGE,
    //             cuisine: "Pizza, Italian, Fast Food",
    //             rating: 4.5,
    //             deliveryTime: "🕒 38 minutes",
    //         },
    //         {
    //             name: "Burger King",
    //             image:
    //                 "https://img.magnific.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg?semt=ais_hybrid&w=740&q=80",
    //             cuisine: "Burgers, Fast Food",
    //             rating: 3.5,
    //             deliveryTime: "🕒 25 minutes",
    //         },
    //     ]);
    const [ListOfRestaurantsForFiltering, setListOfRestaurantsForFiltering] =
        useState(restaurantList);
    return (
        <>
            <div className="Search">
                <SearchElement />
            </div>

            <div className="filter">
                <button className="filter-btn">Filter</button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants =
                            ListOfRestaurantsForFiltering.filter(
                                (restaurant) => restaurant.rating >= 4
                            );

                        setListOfRestaurantsForFiltering(
                            filteredRestaurants
                        );

                        console.log(filteredRestaurants);
                    }}
                >
                    Rating 4.0+
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Delivery Time clicked");
                    }}
                >
                    Delivery Time
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Cost: Low to High clicked");
                    }}
                >
                    Cost: Low to High
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("Cost: High to Low clicked");
                    }}
                >
                    Cost: High to Low
                </button>
            </div>

            <div className="res-container">
                {ListOfRestaurantsForFiltering.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.name}
                        RestData={restaurant}
                    />
                ))}
            </div>
        </>
    );
};

export default BodyComponentTest;