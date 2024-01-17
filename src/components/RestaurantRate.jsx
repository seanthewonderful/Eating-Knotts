import { useEffect, useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { notify } from "../assets/funx";
import axios from "axios";

export default function RestaurantRate({ restaurant }) {
  const user = useSelector((state) => state.user);
  const [rated, setRated] = useState(true);
  const [starRating, setStarRating] = useState("5");
  const [review, setReview] = useState("");

  const navigate = useNavigate();

  const handleSave = () => {
    const bodyObj = {
      stars: starRating,
      review: review,
    };
    axios
      .post(`/api/rating/create/${restaurant.restaurantId}`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
        setRated(true);
      })
      .catch((err) => {
        notify("warning", err.response.data.message);
        setRated(true);
      });
  };

  const figureIfRated = () => {
    if (user) {
      for (let rating of user.ratings) {
        if (rating.restaurantId === restaurant.restaurantId) {
          setRated(true);
          return;
        }
      }
      setRated(false);
    }
  };

  const handleLoginRedirect = () => {
    localStorage.setItem("preLoginPath", window.location.pathname);
    navigate("/login");
  };

  useEffect(() => {
    figureIfRated();
  }, [rated, setRated]);

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
      ) : (
        <></>
      )}
    </Col>
  ) : (
    <Button size="sm" style={{ width: "50%" }} onClick={handleLoginRedirect}>
      {/* <NavLink to={"/login"}>Log in to rate this restaurant!</NavLink> */}
      Log in to rate this restaurant!
    </Button>
  );
}
