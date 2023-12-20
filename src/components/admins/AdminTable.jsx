import { useState } from "react";
import AdminDisplay from "./AdminDisplay";

export default function AdminTable({ allAdmins }) {
  const [allAdminsLocal, setAllAdminsLocal] = useState(allAdmins);
  console.log(allAdmins);

  const adminRows = allAdmins.map((admin) => {
    return (
      <AdminDisplay
        key={admin.adminId}
        admin={admin}
        adminData={{ allAdminsLocal, setAllAdminsLocal }}
      />
    );
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
          <th>Clearance lvl</th>
          <th>Img</th>
          <th>Update?</th>
        </tr>
      </thead>
      <tbody>{adminRows}</tbody>
    </table>
  );
}
