import axios from "axios";
import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  Button,
  Form,
  Accordion,
} from "react-bootstrap";
import { notify } from "../../assets/funx";
import ProfileIcon from "../ProfileIcon";

export default function AddAdminModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState({ fName: "", lName: "" });
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [clearance, setClearance] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    const bodyObj = {
      username,
      password,
      email,
      firstName: name.fName,
      lastName: name.lName,
      img: selectedAvatar,
    };

    axios
      .post(`/api/admin/create`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
      })
      .catch((err) => notify("danger", err.response.data.message));

    setShow(false);
  };

  const avatars = [
    { imgSrc: "/public/proficons/default.png", id: 1 },
    { imgSrc: "/public/proficons/charlie.png", id: 2 },
    { imgSrc: "/public/proficons/linus.png", id: 3 },
    { imgSrc: "/public/proficons/lucy.png", id: 4 },
    { imgSrc: "/public/proficons/marcie.png", id: 5 },
    { imgSrc: "/public/proficons/patty.png", id: 6 },
    { imgSrc: "/public/proficons/franklin.png", id: 7 },
    { imgSrc: "/public/proficons/pigpen.png", id: 8 },
    { imgSrc: "/public/proficons/rerun.png", id: 9 },
    { imgSrc: "/public/proficons/sally.png", id: 10 },
    { imgSrc: "/public/proficons/schroeder.png", id: 11 },
    { imgSrc: "/public/proficons/snoopy.png", id: 12 },
    { imgSrc: "/public/proficons/olaf.png", id: 13 },
    { imgSrc: "/public/proficons/belle.png", id: 14 },
    { imgSrc: "/public/proficons/spike.png", id: 15 },
    { imgSrc: "/public/proficons/woodstock.png", id: 16 },
  ];
  const avatarOptions = avatars.map((avatar) => {
    return (
      <ProfileIcon
        key={avatar.id}
        avatar={avatar}
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
      />
    );
  });

  return (
    <Container>
      <Row className="justify-content-center mb-2">
        <Col xs={2}>
          <Button variant="primary" size="sm" onClick={handleShow}>
            New Administrator
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ "background-color": "b089b0" }}>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ "background-color": "#b089b0" }}>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value={name.fName}
            onChange={(e) => setName({ ...name, fName: e.target.value })}
            required
          />
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Last name"
            value={name.lName}
            onChange={(e) => setName({ ...name, lName: e.target.value })}
            required
          />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Select an avatar:</Accordion.Header>
              <Accordion.Body>{avatarOptions}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Form.Label>Security Clearance</Form.Label>
          <Form.Select
            onChange={(e) => setClearance(e.target.value)}
            value={clearance}
            style={{ width: "55%" }}
          >
            <option value="alpha">Alpha</option>
            <option value="defcon6">DEFCON 6</option>
            <option value="kremlin">Kremlin</option>
            <option value="midnight">Midnight</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Administrator
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
