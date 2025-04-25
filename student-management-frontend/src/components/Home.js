import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Student Management System</h1>
      <Link to="/students" className="btn">View Students</Link>
      <Link to="/add" className="btn">Add Student</Link>
    </div>
  );
}
export default Home;
