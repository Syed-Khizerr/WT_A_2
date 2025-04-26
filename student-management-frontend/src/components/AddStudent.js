import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AddStudent() {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://wt-a-2-backend.onrender.com/students', student)
      .then(() => {
        alert("Student added successfully!");
        navigate('/students');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={student.studentId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={student.dob}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="enrollmentYear"
          placeholder="Enrollment Year"
          min="2001"
        max={new Date().getFullYear()}
          value={student.enrollmentYear}
          onChange={handleChange}
          required
        />
        <select
          name="isActive"
          value={student.isActive}
          onChange={handleChange}
          required
        >
          <option value="">Is Active?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit" className="btn">Add Student</button>
      </form>

      <Link to="/" className="btn-home">Home</Link>
    </div>
  );
}

export default AddStudent;
