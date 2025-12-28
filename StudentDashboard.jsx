import React, { useState } from "react";

const students = [
  { id: 1, name: "Aarav Kumar", dept: "CSE", year: "3rd Year", cgpa: 8.6 },
  { id: 2, name: "Meera S", dept: "ECE", year: "2nd Year", cgpa: 9.1 },
  { id: 3, name: "Kavin R", dept: "IT", year: "Final Year", cgpa: 8.2 }
];

export default function StudentDashboard() {
  const [active, setActive] = useState("students");

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
          background: #fdf6e3;
        }

        .dashboard {
          display: flex;
          min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
          width: 220px;
          background: #f5e6c8;
          padding: 25px;
          border-right: 4px solid #d6b98c;
        }

        .sidebar h2 {
          margin-top: 0;
          font-size: 20px;
        }

        .nav {
          margin-top: 30px;
        }

        .nav div {
          padding: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: 6px;
        }

        .nav .active {
          background: #fff;
          font-weight: bold;
          border-left: 5px solid #c0841d;
        }

        /* Main Area */
        .main {
          flex: 1;
          padding: 40px;
        }

        .title {
          font-size: 26px;
          margin-bottom: 20px;
        }

        /* Student Cards */
        .student-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .card {
          background: #fffdf8;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 15px rgba(0,0,0,0.08);
          position: relative;
        }

        .pin {
          width: 12px;
          height: 12px;
          background: #dc2626;
          border-radius: 50%;
          position: absolute;
          top: 12px;
          right: 12px;
        }

        .card h3 {
          margin-top: 0;
        }

        .info {
          font-size: 14px;
          margin-top: 6px;
        }

        .cgpa {
          margin-top: 10px;
          font-weight: bold;
        }

        .placeholder {
          font-size: 18px;
          opacity: 0.7;
        }
      `}</style>

      <div className="dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>🎓 Campus Board</h2>

          <div className="nav">
            <div
              className={active === "students" ? "active" : ""}
              onClick={() => setActive("students")}
            >
              📋 Students
            </div>
            <div
              className={active === "attendance" ? "active" : ""}
              onClick={() => setActive("attendance")}
            >
              🕒 Attendance
            </div>
            <div
              className={active === "reports" ? "active" : ""}
              onClick={() => setActive("reports")}
            >
              📊 Reports
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main">
          {active === "students" && (
            <>
              <div className="title">Student Overview</div>

              <div className="student-grid">
                {students.map(s => (
                  <div key={s.id} className="card">
                    <div className="pin"></div>
                    <h3>{s.name}</h3>
                    <div className="info">Department: {s.dept}</div>
                    <div className="info">Year: {s.year}</div>
                    <div className="cgpa">CGPA: {s.cgpa}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {active !== "students" && (
            <div className="placeholder">
              🚧 This section is under development
            </div>
          )}
        </div>
      </div>
    </>
  );
}
