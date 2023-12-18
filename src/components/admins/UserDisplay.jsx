import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { notify } from "../../assets/funx";

export default function UserDisplay({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [img, setImg] = useState(user.img);

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
      .put(`/api/user/admin-update/${user.userId}`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
        setIsEditing(false);
      })
      .catch((err) => {
        notify("danger", err.response.data.message);
      });
  };

  const handleCancel = () => {
    setUsername(user.username);
    setEmail(user.email);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setImg(user.img);
    setIsEditing(false);
  };

  return isEditing ? (
    <tr className="user-display">
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
          <option value="/proficons/belle.png">Belle Beagle</option>
          <option value="/proficons/charlie.png">Charlie Brown</option>
          <option value="/proficons/franklin.png">Franklin</option>
          <option value="/proficons/linus.png">Linus</option>
          <option value="/proficons/lucy.png">Lucy</option>
          <option value="/proficons/marcie.png">Marcie</option>
          <option value="/proficons/olaf.png">Olaf</option>
          <option value="/proficons/patty.png">Peppermint Patty</option>
          <option value="/proficons/pigpen.png">Pigpen</option>
          <option value="/proficons/rerun.png">Rerun</option>
          <option value="/proficons/sally.png">Sally</option>
          <option value="/proficons/schroeder.png">Schroeder</option>
          <option value="/proficons/snoopy.png">Snoopy</option>
          <option value="/proficons/spike.png">Spike</option>
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
