import axios from "axios";
import { useLoaderData } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { Container, Row } from "react-bootstrap";

export default function MealTypeRestaurants() {
  const { mealTypeWithRestaurants } = useLoaderData();

  const allRestaurants = mealTypeWithRestaurants.restaurants.map(
    (restaurant) => {
      return (
        <RestaurantCard key={restaurant.restaurantId} restaurant={restaurant} />
      );
    }
  );

  return (
    <Container fluid className="restaurants-div text-center">
      <Row id="all-restaurants" className="justify-content-center">
        <h3>{mealTypeWithRestaurants.name} Restaurants</h3>
        {allRestaurants}
      </Row>
    </Container>
  );
}

export const mealTypeRestaurantLoader = async ({ params }) => {
  const { mealTypeName } = params;

  const { data } = await axios.get(`/api/restaurants/mealtype/${mealTypeName}`);

  return data;
};
