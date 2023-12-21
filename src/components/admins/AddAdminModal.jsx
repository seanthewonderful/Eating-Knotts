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

export default function AddAdminModal({ setDummy }) {
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
      clearance,
    };

    axios
      .post(`/api/admin/create`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
        setDummy([]);
      })
      .catch((err) => notify("danger", err.response.data.message));

    setShow(false);
    setUsername("");
    setPassword("");
    setEmail("");
    setName({ fName: "", lName: "" });
    setSelectedAvatar(0);
    setClearance("");
  };

  const avatars = [
    { imgSrc: "/proficons/default.png", id: 1 },
    { imgSrc: "/proficons/charlie.png", id: 2 },
    { imgSrc: "/proficons/linus.png", id: 3 },
    { imgSrc: "/proficons/lucy.png", id: 4 },
    { imgSrc: "/proficons/marcie.png", id: 5 },
    { imgSrc: "/proficons/patty.png", id: 6 },
    { imgSrc: "/proficons/franklin.png", id: 7 },
    { imgSrc: "/proficons/pigpen.png", id: 8 },
    { imgSrc: "/proficons/rerun.png", id: 9 },
    { imgSrc: "/proficons/sally.png", id: 10 },
    { imgSrc: "/proficons/schroeder.png", id: 11 },
    { imgSrc: "/proficons/snoopy.png", id: 12 },
    { imgSrc: "/proficons/olaf.png", id: 13 },
    { imgSrc: "/proficons/belle.png", id: 14 },
    { imgSrc: "/proficons/spike.png", id: 15 },
    { imgSrc: "/proficons/woodstock.png", id: 16 },
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
