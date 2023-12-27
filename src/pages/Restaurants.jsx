import axios from "axios";
import { useLoaderData } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

export default function AllRestaurants() {
  const { restaurants } = useLoaderData();
  const [searchVal, setSearchVal] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [cuisineChoice, setCuisineChoice] = useState("");
  const [mealTypeChoice, setMealTypeChoice] = useState("");
  const [landChoice, setLandChoice] = useState("");

  const allRestaurants = restaurants.map((restaurant) => {
    return (
      <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
    );
  });

  const searchFilter = (inputVal) => {
    if (inputVal === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const searchRestaurants = allRestaurants.filter((restaurant) => {
        return restaurant.props.restaurant.name
          .toLowerCase()
          .includes(inputVal.toLowerCase());
      });

      clear();
      setFilteredRestaurants(searchRestaurants);
    }
  };

  const debounceHandler = useCallback(debounce(searchFilter, 500), [
    searchFilter,
  ]);

  const cuisineFilter = () => {
    const cuisineRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant.props.restaurant.cuisines.some(
        (cuisine) => cuisine.name.toLowerCase() === cuisineChoice
      );
    });
    setFilteredRestaurants(cuisineRestaurants);
  };

  const mealTypeFilter = () => {
    const mealTypeRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant.props.restaurant.mealTypes.some(
        (mealType) => mealType.name.toLowerCase() === mealTypeChoice
      );
    });
    setFilteredRestaurants(mealTypeRestaurants);
  };

  const landFilter = () => {
    const landRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant.props.restaurant.land.name.toLowerCase() === landChoice;
    });
    setFilteredRestaurants(landRestaurants);
  };

  const clear = () => {
    setCuisineChoice("");
    setMealTypeChoice("");
    setLandChoice("");
  };

  useEffect(() => {
    if (cuisineChoice === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      cuisineFilter();
    }
  }, [cuisineChoice]);

  useEffect(() => {
    if (mealTypeChoice === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      mealTypeFilter();
    }
  }, [mealTypeChoice]);

  useEffect(() => {
    if (landChoice === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      landFilter();
    }
  }, [landChoice]);

  return (
    <Container fluid className="restaurants-div text-center">
      <Row id="all-restaurants" className="justify-content-center">
        <h3>Knott's Berry Farm Restaurants</h3>
      </Row>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <input
            type="text"
            id="search-bar"
            placeholder="Search Restaurants"
            style={{ width: "100%" }}
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
              debounceHandler(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} sm={6} lg={8} id="filter-col">
          <form>
            <label htmlFor="cuisine-select" className="filter-label">
              Cuisine
            </label>
            <select
              name="cuisine-select"
              id="cuisine-select"
              value={cuisineChoice}
              onChange={(e) => {
                setCuisineChoice(e.target.value);
              }}
            >
              <option value="" disabled></option>
              <option value="american">American</option>
              <option value="mexican">Mexican</option>
              <option value="italian">Italian</option>
              <option value="southern">Southern</option>
              <option value="asian">Asian</option>
              <option value="coffee">Coffee</option>
              <option value="dessert">Dessert</option>
            </select>
            <br />
            <label htmlFor="cuisine-select" className="filter-label">
              Meal
            </label>
            <select
              name="mealType-select"
              id="mealType-select"
              value={mealTypeChoice}
              onChange={(e) => {
                setMealTypeChoice(e.target.value);
              }}
            >
              <option value="" disabled></option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
            </select>
            <br />
            <label htmlFor="cuisine-select" className="filter-label">
              Land
            </label>
            <select
              name="land-select"
              id="land-select"
              value={landChoice}
              onChange={(e) => {
                setLandChoice(e.target.value);
              }}
            >
              <option value="" disabled></option>
              <option value="camp snoopy">Camp Snoopy</option>
              <option value="fiesta village">Fiesta Village</option>
              <option value="boardwalk">Boardwalk</option>
              <option value="ghost town">Ghost Town</option>
              <option value="outside the park">Outside the Park</option>
            </select>
          </form>
          <button onClick={clear} id="clear-btn">
            Clear
          </button>
        </Col>
      </Row>
      <Row>{filteredRestaurants}</Row>
    </Container>
  );
}

export const allRestaurantsLoader = async () => {
  const { data } = await axios.get("/api/restaurants/all");

  return data;
};
