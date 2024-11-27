import React from 'react';
import { useRBAC } from '../context/RBACContext';

function PermissionManagement() {
  const { roles, permissions } = useRBAC();

  return (
    <div>
      <h2>Permission Management</h2>
      <div className="mt-3">
        <h5>Manage Permissions for Roles</h5>
        {roles.map((role) => (
          <div key={role.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{role.name}</h5>
              <p className="card-text">Permissions: {role.permissions.join(', ')}</p>
              <button className="btn btn-warning">Edit Permissions</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PermissionManagement;
