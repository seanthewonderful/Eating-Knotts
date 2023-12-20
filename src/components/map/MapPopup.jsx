import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Popup } from "react-leaflet";
import { NavLink, useNavigate } from "react-router-dom";
import StarAvg from "../StarAvg";
import { calculateAvgStars } from "../../assets/funx.js";

export default function MapPopup({ restaurant }) {
  const [avgStars, setAvgStars] = useState(0);

  const navigate = useNavigate();

  const calculateStarAvg = () => {
    setAvgStars(calculateAvgStars(restaurant));
  };

  useEffect(() => {
    calculateStarAvg();
  }, []);

  return (
    <Popup>
      <Container>
        <Row id="popup-card">
          <NavLink to={`/restaurant/${restaurant.restaurantId}`}>
            <Row>
              <h4>{restaurant.name}</h4>
            </Row>
          </NavLink>

          <Row>
            <p id="restaurant-expense">{restaurant.expense}</p>
          </Row>

          <Row>
            <p>
              <StarAvg starAvg={avgStars} />({restaurant.ratings.length})
            </p>
          </Row>
        </Row>
      </Container>
    </Popup>
  );
}
