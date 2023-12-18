import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AdminTable from "../../components/admins/AdminTable";
import UserTable from "../../components/admins/UserTable";

export default function ProfileAdmin() {
  const { admin } = useLoaderData();

  const [allAdmins, setAllAdmins] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [allRatings, setAllRatings] = useState([]);

  const loadAllData = () => {
    axios
      .get(`/api/admin/access/${admin.adminId}`)
      .then((res) => {
        console.log("res.data: ", res.data);
        setAllAdmins(res.data.allAdmins);
        setAllUsers(res.data.allUsers);
        setAllRestaurants(res.data.allRestaurants);
        setAllRatings(res.data.allRatings);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <h4>Welcome, administrator {admin.username}</h4>
      </Row>
      <Row>
        <Tabs defaultActiveKey="profile" id="admin-tabs" className="mb-3">
          <Tab eventKey="myInfo" title="My Info">
            Tab content for My Info
          </Tab>
          <Tab eventKey="admins" title="All Admins">
            {<AdminTable allAdmins={allAdmins} />}
          </Tab>
          <Tab eventKey="users" title="All Users">
            {<UserTable allUsers={allUsers} />}
          </Tab>
          <Tab eventKey="restaurants" title="All Restaurants">
            Tab content for all restaurants
          </Tab>
          <Tab eventKey="ratings" title="All Ratings">
            Tab content for all ratings
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export const adminLoader = async ({ params }) => {
  const { adminId } = params;

  const { data } = await axios.get(`/api/admin/id/${adminId}`);

  return data;
};
