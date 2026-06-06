import React from "react";
import ReactDOM from "react-dom/client";


// All components are imported here in app.js for practice purpose but in real world project we will use react router for routing and we will import components in their respective route files.
import Header from "./componants/Header";
import BodyComponent from "./componants/BodyComponent";
import RestaurantCard from "./componants/RestaurantCard";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Footer from "./componants/Footer";
import Contact from "./componants/contact";
import About from "./componants/About";
import Error from "./componants/Error";
import Service from "./componants/Service";
import Cart from "./componants/Cart";
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
        {/* if path is / then show BodyComponent */}
        {/* if path is /contact then show Contact */}
        <Outlet />


        {/* Footer */}

        
        <Footer />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/service",
                element: <Service />,
                errorElement: <Error />
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error /> 
            }


        ],
        errorElement: <Error />
    }
])


// there are two types of routing
// one is client side routing and other is server side routing
// the difference between client side routing and server side routing is that in client side routing the routing is handled by the react router and in server side routing the routing is handled by the server and the server sends the html file to the client and the client renders the html file and shows it to the user but in client side routing the react router handles the routing and it renders the component based on the path and it does not send any html file to the client and it does not reload the page and it just updates the url and renders the component based on the path and this is called single page application (SPA) because we are not reloading the page and we are just updating the url and rendering the component based on the path.



//Its time for children routes 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);