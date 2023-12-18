import UserDisplay from "./UserDisplay";

export default function UserTable({ allUsers }) {
  const userRows = allUsers.map((user) => {
    return <UserDisplay key={user.userId} user={user} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Img</th>
          <th>Update?</th>
        </tr>
      </thead>
      <tbody>{userRows}</tbody>
    </table>
  );
}
