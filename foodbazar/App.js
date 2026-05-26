import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
 - Logo
 - Nav Items (Right side)
Body
 - Search Bar
 - Restaurant List (Restaurant Card)
        -img
        -name
        -rating
        -cuisine
        -delivery time
footer
 - links
 - Copyright


*/








// Header Component
const Header = () => {
    return (
        <>
         <div className="header">
                <div 
                    className="logo">
                    <img 
                    src = "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:6e351717-a10f-5cbc-9a9a-794240ca61c4/component?assetType=TEMPLATE&etag=789ec321b1294d1dbbe7a3ee3dfac43a&revision=10d836af-5c0a-4a03-8727-2dc19667ace5&component_id=3d636883-3014-4016-b23f-f74b12e8adb3"></img>
                </div>
                <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
               
        </>
    );
}


// Practice purpose restaurant card component and this is used for inline styling

// const styleobj = {
//     backgroundColor: "lightgray",
//     width: "200px",
//     height: "200px",
//     margin: "10px"
// }


const RestaurantCard = (props) => {
    const { RestData} = props;
    const { name, image, cuisine, rating, deliveryTime } = RestData;
    return (
        // <div className="res-card" style={styleobj}> 
        <div className="res-card">  
            <img
            className="res-logo"
            src = {image}
            alt = {name} 
            >
            </img>   
    
             <h3>{name}</h3>
             <h4>{cuisine}</h4>
                <h4>{rating}</h4>
                <h4>{deliveryTime}</h4>

        </div>
    );
}



// Search element
const SearchElement = () =>{
    return (
        <div className="search-container">
            <input 
                type="text"
                placeholder="Search restaurants..."
                className="search-input"
            />
            <button className="search-btn">
                Search
            </button>
        </div>
    );

            

}


// i will use props to make the restaurant card dynamic and reusable but for now i am just creating a static one for practice purpose and to understand the concept of components in react.

const  restaurantList = [
        { name: "PizzaPurg", image:"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cuisine: "Pizza, Italian, Fast Food", rating: "⭐ 4.5 stars", deliveryTime: "🕒 38 minutes" },
        { name: "Burger King", image:"https://img.magnific.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Burgers, Fast Food", rating: "⭐ 4.2 stars", deliveryTime: "🕒 25 minutes" },
        { name: "Sushi Master", image:"https://img.magnific.com/free-photo/sushi-roll-with-fish-and-vegetables-on-white-background_123827-29710.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Sushi, Japanese", rating: "⭐ 4.7 stars", deliveryTime: "🕒 45 minutes" },
        { name: "Taco Fiesta", image:"https://img.magnific.com/free-photo/tacos-with-beef-and-vegetables-isolated-white-background_123827-29711.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Tacos, Mexican", rating: "⭐ 4.3 stars", deliveryTime: "🕒 30 minutes" },
        { name: "Pasta Palace", image:"https://img.magnific.com/free-photo/spaghetti-with-tomato-sauce-and-basil-isolated-white-background_123827-29712.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Pasta, Italian", rating: "⭐ 4.6 stars", deliveryTime: "🕒 40 minutes"},
        { name: "Curry House", image:"https://img.magnific.com/free-photo/indian-curry-with-rice-isolated-white-background_123827-29713.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Curry, Indian", rating: "⭐ 4.4 stars", deliveryTime: "🕒 35 minutes"},
        { name: "BBQ Grill", image:"https://img.magnific.com/free-photo/barbecue-grilled-meat-with-sauce-isolated-white-background_123827-29715.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "BBQ, Grilled", rating: "⭐ 4.5 stars", deliveryTime: "🕒 50 minutes" },
        { name: "Vegan Delight", image:"https://img.magnific.com/free-photo/vegan-buddha-bowl-with-quinoa-and-vegetables-isolated-white-background_123827-29716.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Vegan, Healthy", rating: "⭐ 4.7 stars", deliveryTime: "🕒 30 minutes" },
        { name: "Dessert Haven", image:"https://img.magnific.com/free-photo/assorted-desserts-on-white-background_123827-29717.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Desserts, Sweets", rating: "⭐ 4.8 stars", deliveryTime: "🕒 20 minutes" },
        { name: "Seafood Shack", image:"https://img.magnific.com/free-photo/grilled-fish-with-lemon-and-herbs-isolated-white-background_123827-29718.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Seafood, Grilled", rating: "⭐ 4.6 stars", deliveryTime: "🕒 40 minutes" },
        { name: "Salad Bowl", image:"https://img.magnific.com/free-photo/healthy-salad-with-vegetables-and-chicken-isolated-white-background_123827-29714.jpg?semt=ais_hybrid&w=740&q=80", cuisine: "Salads, Healthy", rating: "⭐ 4.8 stars", deliveryTime: "🕒 20 minutes" }

    ];





const BodyComponent = () => {
    return (
        <>
        <div className="Search">
            <SearchElement />
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



const AppLayout = () => {
    return <div className="app">
        <Header />
        {/* Header complete now its time for search and restaurant cards */}
        <BodyComponent />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);