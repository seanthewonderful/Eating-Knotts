import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLoaderData } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import utensilsSolid from "../../public/icons/utensilsSolid.svg";
import { calculateAvgStars } from "../assets/funx";
import StarAvg from "../components/StarAvg";
import RestaurantRate from "../components/RestaurantRate";
import UserRating from "../components/UserRating";
import { useSelector } from "react-redux";

export default function RestaurantPage() {
  const [avgStars, setAvgStars] = useState(0);
  const { restaurant } = useLoaderData();
  const user = useSelector((state) => state.user);

  const cuisines = restaurant.cuisines.map((cuisine) => {
    return (
      <NavLink
        key={cuisine.cuisineId}
        to={`/restaurants?cuisine=${cuisine.name}`}
        id="rest-page-link"
      >
        {cuisine.name}
      </NavLink>
    );
  });

  // const ratings = restaurant.ratings.map((rating) => {
  //   return (
  //     <UserRating
  //       key={rating.ratingId}
  //       rating={rating}
  //       restaurant={restaurant}
  //       user={user}
  //     />
  //   );
  // });

  const calculateStarAvg = () => {
    setAvgStars(calculateAvgStars(restaurant));
  };

  useEffect(() => {
    calculateStarAvg();
  });

  return (
    <Container className="restaurant-page-container text-center" fluid>
      <Row className="justify-content-center">
        <Col xs={12} sm={6}>
          <Image
            src={restaurant.img}
            className="restaurant-page-img"
            rounded
            fluid
          />
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <h2>{restaurant.name}</h2>
          </Row>
          <Row>
            <p className="fw-lighter fst-italic" id="rest-page-p">
              <NavLink to={"/restaurants"} id="rest-page-link">
                Restaurant
              </NavLink>{" "}
              in{" "}
              <NavLink
                to={`/restaurants?land=${restaurant.land.name.toLowerCase()}`}
                id="rest-page-link"
              >
                {restaurant.land.name}
              </NavLink>{" "}
              at{" "}
              <a
                href="https://www.knotts.com/"
                target="_blank"
                id="rest-page-link"
              >
                Knott's Berry Farm
              </a>
            </p>
            <p id="restaurant-expense">{restaurant.expense}</p>
          </Row>
          <Row>
            <p className="fw-light" id="rest-page-p">
              {restaurant.description}
            </p>
          </Row>
          <Row className="text-start">
            <span id="rest-page-p">
              <i id="rest-server" className="bi bi-person-walking"></i>
              {restaurant.fullService ? (
                <i id="rest-check" className="bi bi-check-lg"></i>
              ) : (
                <i id="rest-x" className="bi bi-x"></i>
              )}
              Full service <br />
              <i id="rest-refill" className="bi bi-cup-straw"></i>
              {restaurant.refills ? (
                <i id="rest-check" className="bi bi-check-lg"></i>
              ) : (
                <i id="rest-x" className="bi bi-x"></i>
              )}
              Refills
              <br />
              <p>
                <img src={utensilsSolid} alt="" /> {cuisines}
              </p>
            </span>
          </Row>
          <Row className="text-start">
            <Col>
              <span id="rest-page-p">
                Guest ratings: <StarAvg starAvg={avgStars} />(
                {restaurant.ratings.length})
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <RestaurantRate restaurant={restaurant} user={user} />
      </Row>
      {/* <Row className="justify-content-start text-start" id="ratings-div">
        {ratings}
      </Row> */}
    </Container>
  );
}

export const restaurantProfileLoader = async ({ params }) => {
  const { restaurantId } = params;

  const { data } = await axios.get(`/api/restaurant/id/${restaurantId}`);

  return data;
};
