import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://wt-a-2-backend.onrender.com/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const deleteStudent = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;
    axios.delete(`https://wt-a-2-backend.onrender.com/students/${id}`)
      .then(() => setStudents(students.filter(s => s._id !== id)));
  };

  return (
    <div className="container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr><th>Student Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>DOB</th><th>Dept</th><th>Enrollment Year</th><th>Active?</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.studentId}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.email}</td>
              <td>{new Date(s.dob).toLocaleDateString('en-GB')}</td>
              <td>{s.department}</td>
              <td>{s.enrollmentYear}</td>
              <td>{s.isActive}</td>
              <td>
                <Link to={`/edit/${s._id}`} className="btn">Edit</Link>
                <button onClick={() => deleteStudent(s._id)} className="btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="btn-home">Home</Link>
    </div>
  );
}
export default StudentList;
