import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { notify } from "../../assets/funx";

export default function RatingDisplay({ rating }) {
  const [isEditing, setIsEditing] = useState(false);
  const [stars, setStars] = useState(rating.stars);
  const [review, setReview] = useState(rating.review);
  const [show, setShow] = useState(false);

  const editMode = () => setIsEditing(true);

  const handleSave = () => {
    const bodyObj = { stars, review };

    axios
      .put(`/api/rating/update/${rating.ratingId}`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
        setIsEditing(false);
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = () => {
    setStars(rating.stars);
    setReview(rating.review);
    setIsEditing(false);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDelete = () => {
    axios
      .delete(`/api/rating/delete/${rating.ratingId}`)
      .then((res) => {
        notify("success", res.data.message);
      })
      .catch((err) => console.error(err));

    setShow(false);
    window.location.reload();
  };

  return isEditing ? (
    <>
      <tr>
        <td>{rating.ratingId}</td>
        <td>{rating.restaurant.name}</td>
        <td>{rating.user.username}</td>
        <td>
          <select
            name="stars"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
        <td>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </td>
        <td>
          <Button variant="success" size="sm" onClick={handleSave}>
            Save
          </Button>
          <Button variant="warning" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </td>
      </tr>
    </>
  ) : (
    <>
      <tr>
        <td>{rating.ratingId}</td>
        <td>{rating.restaurant.name}</td>
        <td>{rating.user.username}</td>
        <td>{stars}</td>
        <td>{review}</td>
        <td>
          <Button variant="secondary" size="sm" onClick={editMode}>
            Edit
          </Button>
          <Button
            className="ms-2"
            variant="outline-danger"
            size="sm"
            onClick={handleShow}
          >
            Delete
          </Button>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Are you sure you want to delete this rating? This cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
