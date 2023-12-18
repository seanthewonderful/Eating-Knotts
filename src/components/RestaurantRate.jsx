import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function RestaurantRate({ notRated }) {
  const user = useSelector((state) => state.user);

  const [starRating, setStarRating] = useState("5");
  const [review, setReview] = useState("");

  return user ? (
    <div>
      <Form>
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
      </Form>
    </div>
  ) : (
    <Button size="sm" style={{ width: "50%" }}>
      <NavLink to={"/login"}>Log in to rate this restaurant!</NavLink>
    </Button>
  );
}
