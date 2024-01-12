import axios from "axios";
import { useLoaderData } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { Container, Row } from "react-bootstrap";

export default function LandRestaurants() {
  const { landWithRestaurants } = useLoaderData();

  const allRestaurants = landWithRestaurants.restaurants.map((restaurant) => {
    return (
      <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
    );
  });

  return (
    <Container fluid className="restaurants-div text-center">
      <Row id="all-restaurants" className="justify-content-center">
        <h3>Restaurants in {landWithRestaurants.name}</h3>
        {allRestaurants}
      </Row>
    </Container>
  );
}

export const landRestaurantLoader = async ({ params }) => {
  // const { landId } = params;
  const { landName } = params;
  const { data } = await axios.get(`/api/restaurants/land/${landName}`);

  return data;
};
