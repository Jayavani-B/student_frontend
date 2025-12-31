import React, { useState } from "react";

function EditStudent({ student, setStudents, closeEdit }) {
  const [name, setName] = useState(student.name);
  const[grade,setGrade]=useState(student.grade);
  const[subject,setSubject]=useState(student.subject);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedStudent = { name,grade,subject };

    fetch(`http://localhost:5000/api/students/${student._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents((prev) =>
          prev.map((s) => (s._id === student._id ? data : s))
        );
        closeEdit(); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="edit-student-form">
      <h3>Edit Student</h3>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
         <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <button type="submit">Update</button>
        <button type="button" onClick={closeEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
