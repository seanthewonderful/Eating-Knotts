import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap";
import { notify } from "../../assets/funx";

export default function AddRestaurantModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [expense, setExpense] = useState("$");
  const [img, setImg] = useState("/restaurants/default.png");
  const [fullService, setFullService] = useState(false);
  const [refills, setRefills] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [land, setLand] = useState("");
  const [cuisines, setCuisinse] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    const bodyObj = {
      name,
      description,
      expense,
      img,
      fullService,
      refills,
      xCoord,
      yCoord,
    };

    axios
      .post(`/api/restaurant/create`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
      })
      .catch((err) => notify("danger", err.response.data.message));

    setShow(false);
  };

  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col xs={1}>
          <Button variant="primary" size="sm" onClick={handleShow}>
            New Restaurant
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ "background-color": "#b089b0" }}>
          <Modal.Title>New Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ "background-color": "#b089b0" }}>
          <Form>
            <Form.Group className="mb-2" controlId="newRestaurant">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Restaurant name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Restaurant description"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <Form.Label>Expense</Form.Label>
              <Form.Select
                onChange={(e) => setExpense(e.target.value)}
                value={expense}
                style={{ width: "45%" }}
                required
              >
                <option value=""></option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </Form.Select>
              <Form.Label>Image (skip to set default)</Form.Label>
              <Form.Control
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <Form.Label>Full Service? </Form.Label>
              <Form.Select
                onChange={(e) => setFullService(e.target.value)}
                value={fullService}
                style={{ width: "45%" }}
                required
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
              <Form.Label>Refills available?</Form.Label>
              <Form.Select
                onChange={(e) => setRefills(e.target.value)}
                value={refills}
                style={{ width: "45%" }}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
              <Form.Label>X-Coordinate</Form.Label>
              <Form.Control
                type="decimal"
                value={xCoord}
                placeholder="copy+paste x-coordinate here"
                onChange={(e) => setXCoord(e.target.value)}
                required
              />
              <Form.Label>Y-Coordinate</Form.Label>
              <Form.Control
                type="decimal"
                value={yCoord}
                placeholder="copy+paste y-coordinate here"
                onChange={(e) => setYCoord(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Restaurant
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
