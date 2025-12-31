import React, { useState } from "react";

function AddStudent({ setStudents }) {
  const [name, setName] = useState("");
  const [grade,setGrade]=useState("");
  const[subject,setSubject]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name,grade,subject };

    fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents((prev) => [...prev, data]);
        setName("");
        setGrade("");
        setSubject("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
      type="number"
      placeholder="Grade"
      value={grade} onChange={(e)=>setGrade(e.target.value)}
      required
      />
      <input
      type="text"
      placeholder="Subject"
      value={subject} onChange={(e)=>setSubject(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
