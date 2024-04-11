import { useState } from "react";
import AdminDisplay from "./AdminDisplay";

export default function AdminTable({ allAdmins }) {
  const [allAdminsLocal, setAllAdminsLocal] = useState(allAdmins);

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
          <th>ID</th>
          <th>Usermame</th>
          <th>Email</th>
          <th>F.Name</th>
          <th>L.Name</th>
          <th>Clearance lvl</th>
          <th>Img</th>
          <th>Update?</th>
        </tr>
      </thead>
      <tbody>{adminRows}</tbody>
    </table>
  );
}
