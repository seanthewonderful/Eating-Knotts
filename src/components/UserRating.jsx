import axios from "axios";
import { useEffect, useState } from "react";

export default function UserRating({ rating }) {
  const [user, setUser] = useState({});

  const loadUser = async () => {
    const { data } = await axios.get(`/api/user/id/${rating.userId}`);

    setUser(data.user);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div style={{ border: "1px solid purple" }}>
      <p>
        <img src={user.img} style={{ height: "1.5em" }} /> {user.username} rated
        this place: {rating.stars} stars
      </p>
      <p>Review:</p>
      <p>{rating.review}</p>
    </div>
  );
}
