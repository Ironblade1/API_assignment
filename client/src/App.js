import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>React API Fetch App</h1> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}

export default App;
