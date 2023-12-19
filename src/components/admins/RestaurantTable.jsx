import RestaurantDisplay from "./RestaurantDisplay";

export default function RestaurantTable({ allRestaurants }) {
  const restaurantRows = allRestaurants.map((restaurant) => {
    return (
      <RestaurantDisplay
        key={restaurant.restaurantId}
        restaurant={restaurant}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Expense</th>
          <th>Full-service</th>
          <th>Refills</th>
          <th>X-Coord</th>
          <th>Y-Coord</th>
          <th>Update?</th>
        </tr>
      </thead>
      <tbody>{restaurantRows}</tbody>
    </table>
  );
}
