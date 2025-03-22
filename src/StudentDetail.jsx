import React from 'react';

function StudentDetail({ student, onBack }) {
  if (!student) return null;

  return (
    <div className="student-detail">
      <h2>{student.name}'s Details</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Class: {student.class}</p>
      <button onClick={onBack}>Back to Tile View</button>
    </div>
  );
}

export default StudentDetail;
