import { useEffect, useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function RestaurantRate({ restaurant }) {
  const user = useSelector((state) => state.user);
  const [rated, setRated] = useState(false);
  const [starRating, setStarRating] = useState("5");
  const [review, setReview] = useState("");

  console.log(rated);

  const handleSave = () => {
    const bodyObj = {
      stars: starRating,
      review: review,
    };
    axios
      .post(`/api/rating/create/${restaurant.restaurantId}`, bodyObj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const figureIfRated = () => {
    if (user) {
      for (let rating of user.ratings) {
        if (rating.restaurantId === restaurant.restaurantId) {
          setRated(true);
        }
      }
    }
  };

  useEffect(() => {
    figureIfRated();
  }, []);

  return user ? (
    <Col className="">
      {!rated ? (
        <Form id="restaurant-page-ratings">
          <Form.Label>Rate this place!</Form.Label>
          <Form.Group className="mb-2" controlId="formStars">
            <Form.Label>Stars:</Form.Label>
            <Form.Select onChange={(e) => setStarRating(e.target.value)}>
              <option value="1">⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            </Form.Select>
            <Form.Label>Review:</Form.Label>
            <Form.Control
              as="textarea"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" size="sm" onClick={handleSave} className="">
            Save
          </Button>
        </Form>
      ) : null}
    </Col>
  ) : (
    <Button size="sm" style={{ width: "50%" }}>
      <NavLink to={"/login"}>Log in to rate this restaurant!</NavLink>
    </Button>
  );
}
