import React from 'react';

function TileView({ students, onTileClick }) {
  return (
    <div>
      <h2>Tile View</h2>
      <div className="tile-container">
        {students.map(student => (
          <div className="tile" key={student.id} onClick={() => onTileClick(student)}>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TileView;
