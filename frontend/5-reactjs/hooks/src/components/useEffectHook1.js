import React, { useState, useEffect } from 'react';

function UserComponent() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { //happens at least onc on page load
    fetch('https://reqres.in/api/users/4')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setError(error);
        setLoading(false);
      });
  }, []); // The empty array means this effect runs once after the initial render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div>
      <h3>Fetched data of: {user.data.first_name+" "+user.data.last_name}</h3>
      <p>{user.data.email}</p>
    </div>
  );
}

export default UserComponent;
