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
        to={`/restaurants?cuisine=${cuisine.name}`}
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
      <NavLink
        to={`/restaurants?meal=${mealType.name}`}
        id="popup-link"
        key={mealType.mealTypeId}
      >
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
            <img id="popup-img" src={restaurant.img} alt={restaurant.name} />
          </Row>
          {/* <Row> */}
          <Row className="align-self-center text-center">
            <NavLink to={`/restaurant/${restaurant.restaurantId}`}>
              <h4 id="popup-link">{restaurant.name}</h4>
            </NavLink>
          </Row>

          <Row>
            <Col>
              <h6>Land:</h6>
              <NavLink
                to={`/restaurants?land=${restaurant.land.name}`}
                className="fst-italic "
                id="popup-link"
              >
                {restaurant.land.name}
              </NavLink>
            </Col>
            <Col className="align-self-center text-end">
              <h6>Expense:</h6>
              <p id="restaurant-expense">{restaurant.expense}</p>
            </Col>
          </Row>
          {/* </Row> */}

          <Row className="mt-2">
            <Col>
              <h6>Cuisines:</h6>
              {cuisineLinks}
            </Col>
            <Col className="text-end">
              <h6>Meal Type:</h6>
              {mealTypeLinks}
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
