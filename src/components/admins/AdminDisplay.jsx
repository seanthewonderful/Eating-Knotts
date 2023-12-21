import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { notify } from "../../assets/funx";

export default function AdminDisplay({ admin }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(admin.username);
  const [email, setEmail] = useState(admin.email);
  const [firstName, setFirstName] = useState(admin.firstName);
  const [lastName, setLastName] = useState(admin.lastName);
  const [img, setImg] = useState(admin.img);
  const [clearance, setClearance] = useState(admin.clearance);

  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  // console.log(adminData.allAdminsLocal);

  const editMode = () => setIsEditing(true);

  const handleSave = () => {
    const bodyObj = {
      username,
      email,
      firstName,
      lastName,
      img,
      clearance,
    };
    axios
      .put(`/api/admin/update/${admin.adminId}`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
        setIsEditing(false);
      })
      .catch((err) => {
        notify("danger", err.response.data.message);
      });
  };

  const handleCancel = () => {
    setUsername(admin.username);
    setEmail(admin.email);
    setFirstName(admin.firstName);
    setLastName(admin.lastName);
    setImg(admin.img);
    setClearance(admin.clearance);
    setIsEditing(false);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDelete = () => {
    axios
      .delete(`/api/admin/delete/${admin.adminId}`, { data: { pass } })
      .then((res) => {
        notify("success", res.data.message);
      })
      .catch((err) => notify("danger", err.response.data.message));

    setShow(false);
    window.location.reload();
  };

  return isEditing ? (
    <tr className="admin-display">
      <td>{admin.adminId}</td>
      <td>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </td>

      <td>
        <select onChange={(e) => setClearance(e.target.value)}>
          <option value="alpha">Alpha</option>
          <option value="defcon6">DEFCON 6</option>
          <option value="kremlin">Kremlin</option>
          <option value="midnight">Midnight</option>
        </select>
      </td>

      <td>
        <select onChange={(e) => setImg(e.target.value)}>
          <option value=""></option>
          <option value="/proficons/lucy.png">Lucy</option>
          <option value="/proficons/charlie.png">Charlie Brown</option>
          <option value="/proficons/snoopy.png">Snoopy</option>
          <option value="/proficons/woodstock.png">Woodstock</option>
        </select>
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
  ) : (
    <>
      <tr>
        <td>{admin.adminId}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{clearance}</td>
        <td>{img.split("/")[2]}</td>
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
          Are you sure you want to delete this administrator? This cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <label htmlFor="pass">Enter your password to confirm this:</label>
          <input
            type="password"
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
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
