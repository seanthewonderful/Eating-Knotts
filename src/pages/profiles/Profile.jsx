import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { notify, toTitleCase } from "../../assets/funx.js";
import { Button, Col, Container, Form, Row, Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProfileIcon from "../../components/ProfileIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import RatingCard from "../../components/RatingCard.jsx";

export default function Profile() {
  const { user } = useLoaderData();
  const userInSession = useSelector(state => state.user)
  const loading = useSelector(state => state.loading)

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState({
    fName: user.firstName,
    lName: user.lastName,
  });
  const [selectedAvatar, setSelectedAvatar] = useState(user.img);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleEditSave = (e) => {
    e.preventDefault();

    const editedInfo = {
      email: email.toLowerCase(),
      firstName: name.fName.toLowerCase(),
      lastName: name.lName.toLowerCase(),
      img: selectedAvatar,
    };

    axios
      .put(`/api/user/update/${user.userId}`, editedInfo)
      .then((res) => {
        dispatch({
          type: "USER_AUTH",
          payload: res.data.user,
        });
        notify("success", res.data.message);
      })
      .catch((error) => {
        notify("error", error.response.data.message);
      });

    setEditMode(false);
  };

  const handleCancelSave = () => {
    setEmail(user.email);
    setName({ fName: user.firstName, lName: user.lastName });
    setSelectedAvatar(user.img);
    setEditMode(false);
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

  const userRatings = user.ratings.map((rating) => {
    return <RatingCard key={rating.ratingId} rating={rating} />;
  });

  useEffect(() => {
    if (!userInSession && !loading) {
      console.log("Hit")
      navigate("/login")
    }
  }, [loading, userInSession])

  return (
    <Container id="login-f">
      <Row className="justify-content-center">
        <Col>
          <h1>Welcome {toTitleCase(user.firstName)}!</h1>
          <img src={selectedAvatar} className="prof-icon-selection" />
        </Col>
      </Row>

      <Row>
        <Col>
          <h5>Nice to see you! Just a reminder, here's your info</h5>
          <li>
            <strong>User ID:</strong> {user.userId}
          </li>
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          {editMode ? (
            <Form>
              <Form.Group className="mb-1" controlId="formEmail">
                <Form.Label className="fw-bold">Email address:</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Label className="fw-bold">First name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name.fName}
                  onChange={(e) => setName({ ...name, fName: e.target.value })}
                />
                <Form.Label className="fw-bold">Last name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name.lName}
                  onChange={(e) => setName({ ...name, lName: e.target.value })}
                />
              </Form.Group>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Select an avatar</Accordion.Header>
                  <Accordion.Body>{avatarOptions}</Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Button variant="success" size="sm" onClick={handleEditSave}>
                Save
              </Button>
              <Button variant="warning" size="sm" onClick={handleCancelSave}>
                Cancel
              </Button>
            </Form>
          ) : (
            <>
              <li>
                <strong>Email address:</strong> {email}
              </li>
              <li>
                <strong>Name:</strong> {toTitleCase(name.fName)}{" "}
                {toTitleCase(name.lName)}
              </li>
              <li>
                <strong>Password:</strong> <em>Not even we know that</em>
              </li>

              <Button
                variant="outline-primary"
                onClick={() => setEditMode(true)}
              >
                Edit your personal info
              </Button>
            </>
          )}
        </Col>
      </Row>

      <Row className="row-cols-auto text-center">{userRatings}</Row>
    </Container>
  );
}

export const profileLoader = async ({ params }) => {
  const { userId } = params;

  const { data } = await axios.get(`/api/user/id/${userId}`);

  if (data.status == 400) {
    // throw Error("Error loading user profile!");
    return null
  }

  return data;
};
