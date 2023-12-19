import RatingDisplay from "./RatingDisplay";

export default function RatingTable({ allRatings }) {
  const ratingRows = allRatings.map((rating) => {
    return <RatingDisplay key={rating.ratingId} rating={rating} />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Rating ID</th>
          <th>Restaurant</th>
          <th>User</th>
          <th>Stars</th>
          <th>Review</th>
          <th>Update?</th>
        </tr>
      </thead>
      <tbody>{ratingRows}</tbody>
    </table>
  );
}
