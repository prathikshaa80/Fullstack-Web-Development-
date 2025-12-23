import React, { useState } from "react";

export default function WorkshopRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    experience: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.topic ||
      !form.experience
    ) {
      alert("⚠️ Please fill all required fields");
      return;
    }

    if (!form.email.includes("@")) {
      alert("⚠️ Invalid email address");
      return;
    }

    alert("🎉 Workshop Registered Successfully!");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(120deg, #1e3a8a, #9333ea);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .box {
          width: 90%;
          max-width: 900px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          padding: 30px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          color: #fff;
        }

        h2 {
          margin-bottom: 15px;
        }

        input, select, textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 10px;
          border: none;
          outline: none;
          font-size: 14px;
        }

        textarea {
          resize: none;
          height: 70px;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }

        .preview {
          background: rgba(0,0,0,0.25);
          padding: 20px;
          border-radius: 15px;
        }

        .preview h3 {
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 5px;
        }

        .preview p {
          margin: 6px 0;
          font-size: 14px;
        }

        .label {
          font-weight: 600;
          opacity: 0.85;
        }

        @media(max-width: 768px) {
          .box {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="box">
          
          {/* Registration Form */}
          <div>
            <h2>🧑‍💻 Online Workshop Registration</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
              />

              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
              >
                <option value="">Select Workshop Topic *</option>
                <option value="Web Development">Web Development</option>
                <option value="AI & ML">AI & ML</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>

              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
              >
                <option value="">Experience Level *</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <textarea
                name="message"
                placeholder="Why do you want to join?"
                value={form.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Register Workshop</button>
            </form>
          </div>

          {/* Live Preview */}
          <div className="preview">
            <h3>📄 Live Preview</h3>
            <p><span className="label">Name:</span> {form.name || "—"}</p>
            <p><span className="label">Email:</span> {form.email || "—"}</p>
            <p><span className="label">Topic:</span> {form.topic || "—"}</p>
            <p><span className="label">Experience:</span> {form.experience || "—"}</p>
            <p><span className="label">Message:</span> {form.message || "—"}</p>
          </div>

        </div>
      </div>
    </>
  );
}
