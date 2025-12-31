import React, { useState } from "react";
import EditStudent from "./EditStudent";

function StudentList({ students, setStudents }) {
    console.log("Students:",students);
    
  const [editingStudent, setEditingStudent] = useState(null);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" })
      .then(() => setStudents(students.filter((s) => s._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="student-list">
      <h2>Students</h2>
      {editingStudent && (
        <EditStudent
          student={editingStudent}
          setStudents={setStudents}
          closeEdit={() => setEditingStudent(null)}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <button onClick={() => setEditingStudent(s)}>Edit</button>
                <button onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
