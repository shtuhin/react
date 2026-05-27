import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
// import SearchElement from "./components/SearchElement";
import BodyComponentTest from "./components/BodyComponentTest";
const AppLayout = () => {
    return <div className="app">
        <Header />
        {/* Header complete now its time for search and restaurant cards */}
        {/* <BodyComponent /> */}
        <BodyComponentTest />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);