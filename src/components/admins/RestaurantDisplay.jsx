import axios from "axios";
import { useState } from "react";
import { notify } from "../../assets/funx";
import { Button } from "react-bootstrap";

export default function RestaurantDisplay({ restaurant }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);
  const [expense, setExpense] = useState(restaurant.expense);
  const [fullService, setFullService] = useState(restaurant.fullService);
  const [refills, setRefills] = useState(restaurant.refills);
  const [xCoord, setXCoord] = useState(restaurant.xCoord);
  const [yCoord, setYCoord] = useState(restaurant.yCoord);

  console.log(fullService);

  const editMode = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const bodyObj = {
      name,
      expense,
      description,
      fullService,
      refills,
      xCoord,
      yCoord,
    };

    axios
      .put(`/api/restaurant/update/${restaurant.restaurantId}`, bodyObj)
      .then((res) => {
        notify("success", res.data.message);
        setIsEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setName(restaurant.name);
    setDescription(restaurant.description);
    setExpense(restaurant.expense);
    setFullService(restaurant.fullService);
    setRefills(restaurant.refills);
    setXCoord(restaurant.xCoord);
    setYCoord(restaurant.yCoord);
    setIsEditing(false);
  };

  return isEditing ? (
    <tr className="restaurant-admin-display">
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td>
        <select
          name="expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        >
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </td>
      <td>
        <select
          name="fullService"
          value={fullService}
          onChange={(e) => setFullService(e.target.value)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </td>
      <td>
        <select
          name="refills"
          value={refills}
          onChange={(e) => setRefills(e.target.value)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </td>
      <td>
        <input
          type="decimal"
          value={xCoord}
          onChange={(e) => setXCoord(e.target.value)}
        />
      </td>
      <td>
        <input
          type="decimal"
          value={yCoord}
          onChange={(e) => setYCoord(e.target.value)}
        />
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
      <td>{name}</td>
      <td>{description}</td>
      <td id="restaurant-expense">{expense}</td>
      <td>{fullService ? "true" : "false"}</td>
      <td>{refills ? "true" : "false"}</td>
      <td>{xCoord}</td>
      <td>{yCoord}</td>
      <td>
        <Button variant="secondary" size="sm" onClick={editMode}>
          Edit
        </Button>
      </td>
    </tr>
  );
}
