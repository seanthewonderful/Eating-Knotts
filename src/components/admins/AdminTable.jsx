import AdminDisplay from "./AdminDisplay";

export default function AdminTable({ allAdmins }) {
  const adminRows = allAdmins.map((admin) => {
    return <AdminDisplay key={admin.adminId} admin={admin} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Admin ID</th>
          <th>Admin name</th>
          <th>Email</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Img</th>
          <th>Update?</th>
        </tr>
      </thead>
      <tbody>{adminRows}</tbody>
    </table>
  );
}
