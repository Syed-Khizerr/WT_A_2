import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
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

  useEffect(() => {
    axios.get(`https://wt-a-2-backend.onrender.com/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`https://wt-a-2-backend.onrender.com/students/${id}`, student)
      .then(() => {
        alert("Student updated successfully!");
        navigate('/students');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
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

        <button type="submit" className="btn">Update Student</button>
      </form>

    </div>
  );
}

export default EditStudent;
