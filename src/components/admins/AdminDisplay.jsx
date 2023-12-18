import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { notify } from "../../assets/funx";

export default function AdminDisplay({ admin }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(admin.username);
  const [email, setEmail] = useState(admin.email);
  const [firstName, setFirstName] = useState(admin.firstName);
  const [lastName, setLastName] = useState(admin.lastName);
  const [img, setImg] = useState(admin.img);

  const editMode = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const bodyObj = {
      username,
      email,
      firstName,
      lastName,
      img,
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
    setIsEditing(false);
  };

  return isEditing ? (
    <tr className="admin-display">
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
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{img}</td>
      <td>
        <Button variant="secondary" size="sm" onClick={editMode}>
          Edit
        </Button>
      </td>
    </tr>
  );
}
