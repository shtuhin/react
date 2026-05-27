

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
                <h4>{"⭐ " + rating + " stars"}</h4>
                <h4>{deliveryTime}</h4>

        </div>
    );
}
export default RestaurantCard;