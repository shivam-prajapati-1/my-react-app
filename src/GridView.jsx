import React from 'react';

function GridView({ students, onToggleView }) {
  return (
    <div>
      <h2>Grid View</h2>
      <button onClick={onToggleView}>Switch to Tile View</button>
      <table className="grid-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GridView;
