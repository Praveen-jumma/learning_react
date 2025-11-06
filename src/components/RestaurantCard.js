import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={CDN_URL}
      />

      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4>{resData.card.card.info.avgRating}</h4>
    </div>
  );
};


export default RestaurantCard ; 