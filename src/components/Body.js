
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import resList from "../utils/mockData";
const Body = () => {
  const [listOfRestaurants,setlistOfRestaurants] = useState(resList);
  return (
    <div className='body'>
      <div className='filter'>
        <button
        className="filter-btn"
         onClick={ () => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.card.card.info.avgRating > 4.1
          );
          setlistOfRestaurants(filteredList);
         }} >Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {
          listOfRestaurants.map((restorent) => (<RestaurantCard key={restorent.card.card.info.id} resData ={restorent}/>) )
        }
        {/* <RestaurantCard  resData = {resList[3]} /> */}

      </div>
    </div>
  )
};

export default Body ; 