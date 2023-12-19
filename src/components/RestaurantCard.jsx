import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarAvg from "./StarAvg.jsx";
import { useEffect, useState } from "react";
import { calculateAvgStars } from "../assets/funx.js";

export default function RestaurantCard({ restaurant }) {
  const [avgStars, setAvgStars] = useState(0);

  const navigate = useNavigate();

  const calculateStarAvg = () => {
    setAvgStars(calculateAvgStars(restaurant));
  };

  useEffect(() => {
    calculateStarAvg();
  }, []);

  return (
    <Card
      style={{ width: "20em", margin: "1%" }}
      className="restaurant-card"
      // onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`)}
    >
      <div id="r-c-i">
        <Card.Img
          variant="top"
          src={restaurant.img}
          className="restaurant-card-img"
          onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`)}
        />
      </div>
      <Card.Body>
        <Card.Title
          onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`)}
        >
          {restaurant.name}
        </Card.Title>

        <Card.Text
          className="mb-0"
          onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`)}
        >
          <StarAvg starAvg={avgStars} />({restaurant.ratings.length})
        </Card.Text>
        <p className="mb-0" id="restaurant-expense">
          {restaurant.expense}
        </p>

        <Card.Text className="text-start">
          <i id="rest-server" className="bi bi-person-walking"></i>
          {restaurant.fullService ? (
            <i id="rest-check" className="bi bi-check-lg"></i>
          ) : (
            <i id="rest-x" className="bi bi-x"></i>
          )}
          Full service
          <br />
          <i id="rest-refill" className="bi bi-cup-straw"></i>
          {restaurant.refills ? (
            <i id="rest-check" className="bi bi-check-lg"></i>
          ) : (
            <i id="rest-x" className="bi bi-x"></i>
          )}
          Refills
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
