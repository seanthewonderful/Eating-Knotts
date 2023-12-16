import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function RestaurantRate() {
  const user = useSelector((state) => state.user);

  return user ? (
    <div>RestaurantRate</div>
  ) : (
    <div>Log in to rate this restaurant!</div>
  );
}
