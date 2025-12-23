import React, { useState } from "react";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profile.name || !profile.email || !profile.bio) {
      alert("⚠️ All fields are required");
      return;
    }

    if (!profile.email.includes("@")) {
      alert("⚠️ Enter a valid email address");
      return;
    }

    alert("✅ Profile updated successfully!");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .profile-bg {
          height: 100vh;
          background: linear-gradient(
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.65)
            ),
            url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f");
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-card {
          width: 400px;
          padding: 30px;
          border-radius: 18px;
          backdrop-filter: blur(14px);
          background: rgba(255, 255, 255, 0.18);
          box-shadow: 0 12px 35px rgba(0,0,0,0.4);
          color: #fff;
          animation: fadeIn 0.9s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          margin: auto;
          margin-bottom: 15px;
          background: url("https://i.pravatar.cc/150") center/cover;
          border: 3px solid #fff;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        input, textarea {
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
          height: 80px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #22c55e, #3b82f6);
          border: none;
          border-radius: 30px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        button:hover {
          transform: translateY(-2px);
        }

        .note {
          text-align: center;
          font-size: 12px;
          margin-top: 15px;
          opacity: 0.85;
        }
      `}</style>

      <div className="profile-bg">
        <div className="profile-card">
          <div className="avatar"></div>

          <h2>Edit Profile</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={profile.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={profile.email}
              onChange={handleChange}
            />

            <textarea
              name="bio"
              placeholder="Short Bio"
              value={profile.bio}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Save Changes</button>
          </form>

          <div className="note">✨ Your profile is safe with us</div>
        </div>
      </div>
    </>
  );
}
c
