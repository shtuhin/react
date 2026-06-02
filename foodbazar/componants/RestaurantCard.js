const RestaurantCard = (props) => {
    const { RestData} = props;
    const { name, image,price, cuisine, rating, deliveryTime } = RestData;
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
                <h4>Taka {price} for one</h4>
             <h4>{cuisine}</h4>
             <h4>{"Stars: " + rating + " ⭐"}</h4>
             <h4>{deliveryTime}</h4>

        </div>
    );
}

export default RestaurantCard;