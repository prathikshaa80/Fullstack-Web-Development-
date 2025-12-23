import React, { useState } from "react";

export default function EventRegistration() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    event: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.phone || !data.event) {
      alert("⚠️ Please fill all the details");
      return;
    }

    alert(`✨ Registration Successful!\n\nName: ${data.name}\nEvent: ${data.event}`);

    setData({
      name: "",
      email: "",
      phone: "",
      event: ""
    });
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .bg {
          height: 100vh;
          background: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.6)
            ),
            url("https://images.unsplash.com/photo-1503428593586-e225b39bddfe");
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          width: 380px;
          padding: 30px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          color: white;
          animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        h2 {
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        p {
          text-align: center;
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        input, select {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: none;
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          border: none;
          border-radius: 30px;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }

        .footer-text {
          text-align: center;
          font-size: 12px;
          margin-top: 15px;
          opacity: 0.8;
        }
      `}</style>

      <div className="bg">
        <div className="card">
          <h2>🎉 Event Register</h2>
          <p>Join something amazing today</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={data.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={data.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={data.phone}
              onChange={handleChange}
            />

            <select name="event" value={data.event} onChange={handleChange}>
              <option value="">Select Event</option>
              <option value="Tech Talk">Tech Talk</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Cultural Night">Cultural Night</option>
            </select>

            <button type="submit">Register Now</button>
          </form>

          <div className="footer-text">✨ Limited seats available</div>
        </div>
      </div>
    </>
  );
}
