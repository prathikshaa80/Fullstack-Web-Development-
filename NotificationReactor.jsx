import React, { useState } from "react";

const notificationTypes = [
  {
    type: "info",
    title: "New Login",
    message: "A user logged in from a new device.",
    color: "#3b82f6"
  },
  {
    type: "warning",
    title: "High Usage",
    message: "Server load is above normal threshold.",
    color: "#f59e0b"
  },
  {
    type: "critical",
    title: "System Failure",
    message: "Database connection lost!",
    color: "#ef4444"
  }
];

export default function NotificationReactor() {
  const [notifications, setNotifications] = useState([]);

  const generateNotification = () => {
    const random =
      notificationTypes[
        Math.floor(Math.random() * notificationTypes.length)
      ];

    const newNotification = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      ...random
    };

    setNotifications([newNotification, ...notifications]);
  };

  const clearNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .dashboard-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #020617, #0f172a);
          padding: 40px;
          color: white;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .header h2 {
          margin: 0;
        }

        .generate-btn {
          padding: 12px 20px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          color: white;
          font-size: 14px;
          cursor: pointer;
        }

        .notification-panel {
          max-width: 700px;
          margin: auto;
        }

        .notification {
          margin-bottom: 15px;
          padding: 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .notification-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-weight: 600;
        }

        .time {
          font-size: 12px;
          opacity: 0.7;
        }

        .message {
          margin-top: 8px;
          font-size: 14px;
          opacity: 0.9;
        }

        .clear {
          margin-top: 10px;
          background: none;
          border: none;
          color: #e5e7eb;
          font-size: 12px;
          cursor: pointer;
        }

        .empty {
          text-align: center;
          opacity: 0.6;
          margin-top: 50px;
        }
      `}</style>

      <div className="dashboard-bg">
        <div className="header">
          <h2>📊 Dashboard Notifications</h2>
          <button className="generate-btn" onClick={generateNotification}>
            + Simulate Notification
          </button>
        </div>

        <div className="notification-panel">
          {notifications.length === 0 && (
            <div className="empty">No notifications yet</div>
          )}

          {notifications.map(n => (
            <div
              key={n.id}
              className="notification"
              style={{ borderLeft: `6px solid ${n.color}` }}
            >
              <div className="notification-header">
                <div className="title">{n.title}</div>
                <div className="time">{n.time}</div>
              </div>

              <div className="message">{n.message}</div>

              <button className="clear" onClick={() => clearNotification(n.id)}>
                Acknowledge & Clear
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
