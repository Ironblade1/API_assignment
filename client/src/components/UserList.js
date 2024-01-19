import React from 'react';
import User from './User';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User Details</h2>
      <table className="user-details-table">
        <thead>
          <tr>
            <th colSpan="2">User Information</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td colSpan="2">
                <User user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default UserList;
