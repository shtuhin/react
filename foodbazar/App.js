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
import RestaurantMenu from "./componants/RestaurantMenu";




const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>
}




// Routes are defined here for practice purpose but in real world project we will use react router for routing and we will define routes in their respective route files.
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
            },
            {
                path: "Restaurant/:resId",
                element: <RestaurantMenu />
            }


        ],
        errorElement: <Error />
    }
])
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);