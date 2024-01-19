import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user-container">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Address:</strong> {user.address.suite} {user.address.street} {user.address.city} {user.address.zipcode}</p>
      <h4>Company Details:</h4>
      <ul>
        <li> <strong>Name:</strong> {user.company.name} </li>
        <li> <strong>catchPhrase:</strong> {user.company.catchPhrase} </li>
        <li> <strong>bs:</strong> {user.company.bs} </li>
      </ul>
    </div>
  );
};

export default User;
