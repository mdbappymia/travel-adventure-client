import React, { useEffect, useState } from "react";

const AdminManagement = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://blooming-reaches-46527.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  const handleMakeAdmin = (id, role) => {
    const isRoleChange = window.confirm("Are you sure?");
    if (isRoleChange) {
      fetch(`https://blooming-reaches-46527.herokuapp.com/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
            let updatedUser = [];
            for (let user of users) {
              if (user._id === id) {
                user.role = role;
              }
              updatedUser.push(user);
            }
            setUsers(updatedUser);
            alert("Admin role change successfully");
          }
        });
    }
  };
  return (
    <div className="text-lg">
      <h1 className="text-center text-4xl font-bold border-b-2 pb-3 mb-3">
        Admin Management
      </h1>
      <div className="users-container grid lg:grid-cols-3 md:grid-cols-1">
        {users.map((user) => (
          <div key={user._id} className="border m-3 p-3">
            <div>
              <h1>Name: {user.displayName}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Role: {user.role}</h1>
            </div>
            <div className="text-white">
              <button
                disabled={user.role === "Admin"}
                onClick={() => handleMakeAdmin(user._id, "Admin")}
                className={`px-3 py-2 bg-sky-900 m-1 ${
                  user.role === "Admin" ? "bg-slate-400" : "hover:bg-sky-800"
                }`}
              >
                Make Admin
              </button>
              <button
                disabled={user.role === "User"}
                onClick={() => handleMakeAdmin(user._id, "User")}
                className={`px-3 py-2 bg-sky-900 m-1 ${
                  user.role === "User" ? "bg-slate-400" : "hover:bg-sky-800"
                }`}
              >
                Remove Admin
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminManagement;
