import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Stars from "./Stars";
import { notify } from "../assets/funx";

export default function UserRating({ rating, restaurant, user }) {
  const [ratingUser, setRatingUser] = useState({});
  const [localRating, setLocalRating] = useState(rating);
  const [newStarRating, setNewStarRating] = useState(rating.stars);
  const [newRatingReview, setNewRatingReview] = useState(rating.review);

  const handleEditClick = (e) => {
    e.preventDefault();

    const updateBody = {
      stars: newStarRating,
      review: newRatingReview,
    };

    axios
      .put(`/api/rating/update/${rating.ratingId}`, updateBody)
      .then((res) => {
        notify("success", "Rating updated");
        setLocalRating(res.data.rating);
      })
      .catch((error) => {
        notify("danger", error.response.data.message);
      });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();

    setNewStarRating(localRating.stars);
    setNewRatingReview(localRating.review);
  };

  const loadUser = async () => {
    const userResponse = await axios.get(`/api/user/id/${rating.userId}`);

    setRatingUser(userResponse.data.user);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return user ? (
    user.userId === rating.userId ? (
      <div style={{ border: "1px solid purple" }}>
        <p>
          <img src={ratingUser.img} style={{ height: "1.5em" }} /> You rated{" "}
          {restaurant.name}:
        </p>
        <Form>
          <Form.Group className="mb-2" controlId="formStars">
            <Form.Label>Stars:</Form.Label>
            <Form.Select onChange={(e) => setNewStarRating(e.target.value)}>
              <option value={newStarRating}>
                <Stars stars={newStarRating} />
              </option>
              <option value="1">⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            </Form.Select>

            <Form.Label>Your review:</Form.Label>
            <Form.Control
              as="textarea"
              value={newRatingReview}
              onChange={(e) => setNewRatingReview(e.target.value)}
            />

            {newStarRating !== localRating.stars ||
            newRatingReview !== localRating.review ? (
              <>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleEditClick}
                  className="mt-3"
                >
                  Save
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={handleCancelClick}
                  className="mt-3 ms-2"
                >
                  Cancel
                </Button>
              </>
            ) : null}
          </Form.Group>
        </Form>
      </div>
    ) : (
      <div style={{ border: "1px solid purple" }}>
        <p>
          <img src={ratingUser.img} style={{ height: "1.5em" }} />{" "}
          {ratingUser.username} rated this place: {rating.stars} stars
        </p>
        <p>Review:</p>
        <p>{rating.review}</p>
      </div>
    )
  ) : null;
}
