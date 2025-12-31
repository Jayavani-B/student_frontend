import React, { useState, useEffect } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([]);

  
 useEffect(() => {
  fetch("http://localhost:5000/api/students")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched students:",data); 
      setStudents(data);
    })
    .catch((err) => console.error(err));
}, []);


  return (
    <div className="app-container">
      <h1>Student Management</h1>
      <AddStudent setStudents={setStudents} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;
