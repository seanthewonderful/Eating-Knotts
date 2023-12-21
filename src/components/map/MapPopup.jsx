import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Popup } from "react-leaflet";
import { NavLink } from "react-router-dom";
import StarAvg from "../StarAvg";
import { calculateAvgStars } from "../../assets/funx.js";

export default function MapPopup({ restaurant }) {
  const [avgStars, setAvgStars] = useState(0);

  const cuisineLinks = restaurant.cuisines.map((cuisine) => {
    return (
      <NavLink
        to={`cuisine/restaurants/${cuisine.name}`}
        id="popup-link"
        key={cuisine.name}
      >
        {cuisine.name}
        <br />
      </NavLink>
    );
  });

  const mealTypeLinks = restaurant.mealTypes.map((mealType) => {
    return (
      <NavLink to={`#`} id="popup-link" key={mealType.mealTypeId}>
        {mealType.name}
        <br />
      </NavLink>
    );
  });

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
          <Row>
            <Col xs={8}>
              <NavLink to={`/restaurant/${restaurant.restaurantId}`}>
                <h4 id="popup-link">{restaurant.name}</h4>
              </NavLink>
            </Col>
            <Col xs={4} className="align-self-center text-end">
              <NavLink
                to={`/land/rest/${restaurant.land.landId}`}
                className="fst-italic "
                id="popup-link"
              >
                {restaurant.land.name}
              </NavLink>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between">
            <Col xs={2}>
              <p id="restaurant-expense">{restaurant.expense}</p>
            </Col>
            <Col xs={3}>
              <NavLink to={`/restaurant/${restaurant.restaurantId}`}>
                <button id="popup-btn">Visit</button>
              </NavLink>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>{cuisineLinks}</Col>
            <Col className="text-end">{mealTypeLinks}</Col>
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
