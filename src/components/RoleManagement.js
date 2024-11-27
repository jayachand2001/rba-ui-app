import React, { useState } from 'react';
import { useRBAC } from '../context/RBACContext';

function RoleManagement() {
  const { roles, addRole } = useRBAC();
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the role to the RBAC context
    addRole(newRole);

    // Clear the form state after submission
    setNewRole({ name: '', permissions: [] });
  };

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // Add permission to the list
      setNewRole({
        ...newRole,
        permissions: [...newRole.permissions, value],
      });
    } else {
      // Remove permission from the list
      setNewRole({
        ...newRole,
        permissions: newRole.permissions.filter((permission) => permission !== value),
      });
    }
  };

  return (
    <div>
      <h2>Role Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Role Name</label>
          <input
            type="text"
            className="form-control"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Permissions</label>

          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="read"
                checked={newRole.permissions.includes("read")}
                onChange={handlePermissionChange}
              />
              <label className="form-check-label">Read</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="write"
                checked={newRole.permissions.includes("write")}
                onChange={handlePermissionChange}
              />
              <label className="form-check-label">Write</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="delete"
                checked={newRole.permissions.includes("delete")}
                onChange={handlePermissionChange}
              />
              <label className="form-check-label">Delete</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add Role</button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleManagement;
