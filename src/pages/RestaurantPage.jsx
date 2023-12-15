import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import axios from "axios";
import { NavLink, useLoaderData } from "react-router-dom";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import utensilsSolid from "../../public/icons/utensilsSolid.svg";

export default function RestaurantPage() {
  const { restaurant } = useLoaderData();

  const cuisines = restaurant.cuisines.map((cuisine) => {
    return (
      <NavLink to={`#`} id="rest-page-link">
        {cuisine.name}
      </NavLink>
    );
  });

  return (
    <Container className="restaurant-page-container text-center" fluid>
      <Row className="justify-content-center">
        <Col
          xxs={12}
          sm={6}
          // id='r-p-i'
        >
          <Image
            src={restaurant.img}
            className="restaurant-page-img"
            rounded
            fluid
          />
        </Col>
        <Col xxs={12} sm={6}>
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
                to={`/land/rest/${restaurant.land.landId}`}
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
              {restaurant.fullService ? (
                <i id="rest-check" className="bi bi-check-lg"></i>
              ) : (
                <i id="rest-x" className="bi bi-x"></i>
              )}
              Full service{" "}
              <i id="rest-server" className="bi bi-person-walking"></i>
              <br />
              {restaurant.refills ? (
                <i id="rest-check" className="bi bi-check-lg"></i>
              ) : (
                <i id="rest-x" className="bi bi-x"></i>
              )}
              Refills <i id="rest-refill" className="bi bi-cup-straw"></i>
              <br />
              <p>
                <img src={utensilsSolid} alt="" /> {cuisines}
              </p>
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export const restaurantProfileLoader = async ({ params }) => {
  const { restaurantId } = params;

  const { data } = await axios.get(`/api/restaurant/id/${restaurantId}`);

  return data;
};
