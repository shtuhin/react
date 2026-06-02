import React from "react";
import ReactDOM from "react-dom/client";


// All components are imported here in app.js for practice purpose but in real world project we will use react router for routing and we will import components in their respective route files.
import Header from "./componants/Header";
import BodyComponent from "./componants/BodyComponent";
import RestaurantCard from "./componants/RestaurantCard";
import Footer from "./componants/Footer";
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



// Practice purpose restaurant card component and this is used for inline styling

// const styleobj = {
//     backgroundColor: "lightgray",
//     width: "200px",
//     height: "200px",
//     margin: "10px"
// }

// i will use props to make the restaurant card dynamic and reusable but for now i am just creating a static one for practice purpose and to understand the concept of components in react.


const AppLayout = () => {
    return <div className="app">
        <Header />
        {/* Header complete now its time for search and restaurant cards */}
        <BodyComponent />


        {/* Footer */}

        
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);