import react, {useState} from "react";
import {useEffect} from "react";
import data from "../utils/mockData";

// Search element
const SearchElement = ({ searchText, setSearchText, allRestaurants, setFilteredRestaurants }) =>{




    return (
        <div className="search-container">
            <input 
                type="text"
                placeholder="Search restaurants..."
                className="search-input"
                value = {searchText} // Set the value to the search query state
                onChange = {(e) => {
                    setSearchText(e.target.value);

                    console.log("Search Text : ", searchText);
                }}
            />
            <button 
            className="search-btn"
            //Filter the restaurant list based on search
            onClick={() => {
                const filtered = allRestaurants.filter((restaurant) =>
                    restaurant.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                );

                setFilteredRestaurants(filtered);
            }}

            >
                Search
            </button>
        </div>
    );

            

}

export default SearchElement;