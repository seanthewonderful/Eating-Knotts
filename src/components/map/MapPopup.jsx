import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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

          <Row className="justify-content-between text-center">
            <Col>
              <p id="restaurant-expense">{restaurant.expense}</p>
            </Col>
            <Col className="align-items-end">
              <NavLink to={`/restaurant/${restaurant.restaurantId}`}>
                <button id="popup-btn">Visit</button>
              </NavLink>
            </Col>
          </Row>

          <Row className="text-center">
            <p>
              <StarAvg starAvg={avgStars} />({restaurant.ratings.length})
            </p>
          </Row>
        </Row>
      </Container>
    </Popup>
  );
}
