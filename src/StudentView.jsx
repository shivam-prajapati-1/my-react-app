import React, { useState } from 'react';
// import './StudentView.css';

const StudentView = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'tile'

  const students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A', email: 'john@example.com', address: '123 Main St', phone: '123-456-7890', school: 'School A', major: 'Computer Science', gpa: 3.9 },
    { id: 2, name: 'Jane Smith', age: 22, grade: 'B+', email: 'jane@example.com', address: '456 Oak St', phone: '987-654-3210', school: 'School B', major: 'Mathematics', gpa: 3.7 },
    // Add more student data here...
  ];

  const toggleView = () => {
    setViewMode(viewMode === 'grid' ? 'tile' : 'grid');
  };

  return (
    <div className="student-view">
      <button className="toggle-button" onClick={toggleView}>
        Toggle to {viewMode === 'grid' ? 'Tile View' : 'Grid View'}
      </button>

      {viewMode === 'grid' ? (
        <div className="student-grid">
          <div className="grid-header">
            <div>ID</div>
            <div>Name</div>
            <div>Age</div>
            <div>Grade</div>
            <div>Email</div>
            <div>Address</div>
            <div>Phone</div>
            <div>School</div>
            <div>Major</div>
            <div>GPA</div>
          </div>
          {students.map((student) => (
            <div className="grid-row" key={student.id}>
              <div>{student.id}</div>
              <div>{student.name}</div>
              <div>{student.age}</div>
              <div>{student.grade}</div>
              <div>{student.email}</div>
              <div>{student.address}</div>
              <div>{student.phone}</div>
              <div>{student.school}</div>
              <div>{student.major}</div>
              <div>{student.gpa}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="student-tiles">
          {students.map((student) => (
            <div className="tile" key={student.id}>
              <h3>{student.name}</h3>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>GPA:</strong> {student.gpa}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentView;
