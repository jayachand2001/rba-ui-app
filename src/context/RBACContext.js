import React, { createContext, useState, useContext } from 'react';

const RBACContext = createContext();

export function useRBAC() {
  return useContext(RBACContext);
}

export function RBACProvider({ children }) {
    // const [users, setUsers] = useState([
    //     { id: 1, name: 'John Doe', email: 'john.doe@example.com', roleId: 1 },
    //     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', roleId: 2 },
    //   ]);
    //   const [roles, setRoles] = useState([
    //     { id: 1, name: 'Editor' },
    //     { id: 2, name: 'User'},
    //   ]);  
    //   const [permissions, setPermissions] = useState([
    //     { id: 1, name: 'Read'},
    //     { id: 2, name: 'Write'},
    //     { id: 3, name: 'delete'}
    //   ]);

  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);  // Adds the new user with roleId
  };
  const deleteUser = (userId) => setUsers(users.filter(user => user.id !== userId));
  const addRole = (role) => setRoles([...roles, role]);
  const assignRoleToUser = (userId, roleId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, roleId: roleId } : user
      )
    );
  };
//   const addPermission = (permission) => setPermissions([...permissions,permission]);
//   const assignPermissionToUser = (roleId, permissionId) => {
//     const updatedPermissions = permissions.map(performance =>)
//   }

  return (
    <RBACContext.Provider value={{ users, roles, permissions, addUser, deleteUser, addRole, assignRoleToUser }}>
      {children}
    </RBACContext.Provider>
  );
}
