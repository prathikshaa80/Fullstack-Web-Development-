import React, { useState } from "react";

const AttendanceTracker = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", present: false },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: false },
    { id: 4, name: "Diana", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📋 Attendance Tracker</h1>

      <div style={styles.summary}>
        <span>✅ Present: {presentCount}</span>
        <span>❌ Absent: {absentCount}</span>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Student Name</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={styles.td}>{student.name}</td>
              <td
                style={{
                  ...styles.td,
                  color: student.present ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {student.present ? "Present" : "Absent"}
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => toggleAttendance(student.id)}
                >
                  Mark {student.present ? "Absent" : "Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
  },
  summary: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  },
  button: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default AttendanceTracker;
