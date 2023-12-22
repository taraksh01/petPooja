import { useDispatch, useSelector } from "react-redux";
import {
  setAvailable,
  setOffset,
  setBanner,
  setWhatsOnMind,
  setTopRestaurants,
  setRestaurants,
  setBestRestaurantsPlaces,
  setBestCuisines,
  setExploreRestaurants,
  setPopularCities,
} from "../Store/restaurants";

const fetchRestaurants = () => {
  const location = useSelector((state) => state.location.details);
  const dispatch = useDispatch();

  const api = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.lat}&lng=${location?.lon}`;
  // console.log(`%c${location.display_name}`, "color: yellow");

  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(api)}`)
    .then((data) => data.json())
    .then((res) => JSON.parse(res.contents))
    .then((json) => {
      dispatch(setOffset(json?.data?.pageOffset?.nextOffset));
      json?.data?.cards?.map((item, index) => {
        switch (item?.card?.card?.id) {
          case "swiggy_not_present":
            dispatch(setAvailable(false));
            break;
          case "topical_banner":
            dispatch(
              setBanner(item?.card?.card?.gridElements?.infoWithStyle?.info)
            );
            break;
          case "whats_on_your_mind":
            dispatch(
              setWhatsOnMind(
                item?.card?.card?.gridElements?.infoWithStyle?.info
              )
            );
            break;
          case "top_brands_for_you":
            dispatch(
              setTopRestaurants(
                item?.card?.card?.gridElements?.infoWithStyle?.restaurants
              )
            );
            break;
          case "restaurant_grid_listing":
            dispatch(
              setRestaurants(
                item?.card?.card?.gridElements?.infoWithStyle?.restaurants
              )
            );
            break;
          case "restaurant_near_me_links":
            switch (item?.card?.card?.title) {
              case "Best Places to Eat Across Cities":
                dispatch(setBestRestaurantsPlaces(item?.card?.card?.brands));
                break;
              case "Best Cuisines Near Me":
                dispatch(setBestCuisines(item?.card?.card?.brands));
                break;
              case "Explore Every Restaurants Near Me":
                dispatch(setExploreRestaurants(item?.card?.card?.brands));
                break;
            }
            break;
          case "popular_cities":
            dispatch(setPopularCities(item?.card?.card?.cities));
            break;
        }
      });
    });
};

export default fetchRestaurants;
