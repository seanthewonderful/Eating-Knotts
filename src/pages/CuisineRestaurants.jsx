import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import RestaurantCard from "../components/RestaurantCard";

export default function CuisineRestaurants() {
  const { cuisineWithRestaurants } = useLoaderData();

  const allRestaurants = cuisineWithRestaurants.restaurants.map(
    (restaurant) => {
      return (
        <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
      );
    }
  );

  return (
    <Container fluid className="restaurants-div text-center">
      <Row id="all-restaurants" className="justify-content-center">
        <h3>Restaurants in {cuisineWithRestaurants.name}</h3>
        {allRestaurants}
      </Row>
    </Container>
  );
}

export const cuisineRestaurantLoader = async ({ params }) => {
  const { cuisineName } = params;

  const { data } = await axios.get(`/api/restaurants/cuisine/${cuisineName}`);

  return data;
};
