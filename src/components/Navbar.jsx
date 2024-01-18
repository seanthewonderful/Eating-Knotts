import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button, Container, Navbar, Nav, Col } from "react-bootstrap";
import { notify } from "../assets/funx.js";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);

  const logout = async () => {
    axios.get("/api/logout").then((res) => {
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
      notify("success", res.data.message);
      navigate("/");
    });
  };

  const sessionCheck = async () => {
    const { data } = await axios.get("/api/session-check");

    if (data.user) {
      dispatch({
        type: "USER_AUTH",
        payload: data.user,
      });
    } else if (data.admin) {
      dispatch({
        type: "ADMIN_AUTH",
        payload: data.admin,
      });
    }
  };

  useEffect(() => {
    sessionCheck();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <NavLink to="/" id="nav-logo">
          <div id="navTitle">
            <span className="align-self-end">
              <h1>Eating</h1>
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Knotts_Berry_Farm_Logo.svg/2560px-Knotts_Berry_Farm_Logo.svg.png"
              alt="knotts-logo"
              id="knotts-nav-logo"
            />
          </div>
        </NavLink>

        <div id="navLinks">
          <Button className="nav-btn">
            <NavLink to="/">Home</NavLink>
          </Button>

          <Button className="nav-btn">
            <NavLink to="/restaurants">Restaurants</NavLink>
          </Button>

          {user && (
            <>
              <Button className="nav-btn">
                <NavLink to={`/profile/${user.userId}`}>Profile</NavLink>
              </Button>

              <img src={user.img} alt="user-icon" id="nav-profile-icon" />

              <Button className="nav-btn" onClick={logout}>
                Logout
              </Button>
            </>
          )}

          {admin && (
            <>
              <Button className="nav-btn">
                <NavLink to={`/admin/${admin.adminId}`}>Admin</NavLink>
              </Button>

              <img src={admin.img} alt="user-icon" id="nav-profile-icon" />

              <Button className="nav-btn">
                <NavLink to={"/"} onClick={logout}>
                  Logout
                </NavLink>
              </Button>
            </>
          )}

          {!user && !admin && (
            <Button className="nav-btn">
              <NavLink to={"/login"}>Login</NavLink>
            </Button>
          )}
        </div>
      </div>{" "}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Container fluid id="main">
        <Outlet />
      </Container>
    </div>
  );
}
