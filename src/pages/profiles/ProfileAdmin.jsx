import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AdminTable from "../../components/admins/AdminTable";
import UserTable from "../../components/admins/UserTable";
import RestaurantTable from "../../components/admins/RestaurantTable";
import RatingTable from "../../components/admins/RatingTable";
import AddRestaurantModal from "../../components/admins/AddRestaurantModal";
import AddUserModal from "../../components/admins/AddUserModal";
import AddAdminModal from "../../components/admins/AddAdminModal";

export default function ProfileAdmin() {
  const { admin } = useLoaderData();

  const [allAdmins, setAllAdmins] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [allRatings, setAllRatings] = useState([]);

  const [dummy, setDummy] = useState([]);

  const loadAllData = () => {
    axios
      .get(`/api/admin/access/${admin.adminId}`)
      .then((res) => {
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
  }, [dummy]);

  return (
    <Container fluid>
      <Row>
        <h4>Welcome, administrator {admin.username}</h4>
      </Row>
      <Row>
        <Tabs defaultActiveKey="admins" className="mb-3 admin-tabs">
          <Tab id="admin-tab" eventKey="admins" title="All Admins">
            {<AddAdminModal setDummy={setDummy} />}
            {<AdminTable allAdmins={allAdmins} />}
          </Tab>
          <Tab id="admin-tab" eventKey="users" title="All Users">
            {<AddUserModal setDummy={setDummy} />}
            {<UserTable allUsers={allUsers} />}
          </Tab>
          <Tab id="admin-tab" eventKey="restaurants" title="All Restaurants">
            {<AddRestaurantModal setDummy={setDummy} />}
            {<RestaurantTable allRestaurants={allRestaurants} />}
          </Tab>
          <Tab id="admin-tab" eventKey="ratings" title="All Ratings">
            {<RatingTable allRatings={allRatings} />}
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
