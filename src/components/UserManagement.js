import React, { useState } from "react";
import { useRBAC } from "../context/RBACContext";

function UserManagement() {
  const { users, addUser, deleteUser, assignRoleToUser, roles } = useRBAC();
  const [newUser, setNewUser] = useState({ name: "", email: "", roleId: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure that a role is selected before submitting
    if (newUser.roleId) {
      addUser({ ...newUser, id: Date.now() }); // Add the user with the selected roleId
      setNewUser({ name: "", email: "", roleId: "" }); // Reset form
    } else {
      alert('Please select a role for the user');
    }
  };

  const handleRoleAssignment = (userId, newRoleId) => {
    assignRoleToUser(userId, newRoleId); // Pass the actual newRoleId
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            value={newUser.roleId}
            onChange={(e) => setNewUser({ ...newUser, roleId: e.target.value })}
            required
          >
            <option value="">Select a Role</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}> {/* Ensure a unique key for each user row */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* Displaying the role name by finding the role using roleId */}
              <td>
                {roles.find((role) => role.id === user.roleId)?.name || 'No Role'}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning ml-2"
                  onClick={() => handleRoleAssignment(user.id, user.roleId)}
                >
                  Assign Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
