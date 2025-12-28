import React, { useState } from "react";

export default function AuthVault() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const authenticate = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setStatus("empty");
      return;
    }

    if (user.email === "admin@vault.com" && user.password === "12345") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .vault-bg {
          height: 100vh;
          background: linear-gradient(
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.7)
            ),
            url("https://images.unsplash.com/photo-1555949963-aa79dcee981c");
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .vault-card {
          width: 420px;
          padding: 30px;
          border-radius: 22px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          color: white;
          animation: appear 0.8s ease;
        }

        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h2 {
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .subtitle {
          text-align: center;
          font-size: 13px;
          opacity: 0.85;
          margin-bottom: 25px;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 12px;
          border: none;
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .alert {
          margin-top: 20px;
          padding: 12px;
          border-radius: 12px;
          font-size: 14px;
          text-align: center;
        }

        .error {
          background: rgba(239,68,68,0.25);
          border: 1px solid #ef4444;
        }

        .success {
          background: rgba(34,197,94,0.25);
          border: 1px solid #22c55e;
        }

        .empty {
          background: rgba(251,191,36,0.25);
          border: 1px solid #fbbf24;
        }

        .hint {
          text-align: center;
          font-size: 12px;
          margin-top: 15px;
          opacity: 0.75;
        }
      `}</style>

      <div className="vault-bg">
        <div className="vault-card">
          <h2>🔐 Secure Vault Access</h2>
          <div className="subtitle">
            Authentication Required
          </div>

          <form onSubmit={authenticate}>
            <input
              type="email"
              name="email"
              placeholder="Vault Email ID"
              value={user.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Access Key"
              value={user.password}
              onChange={handleChange}
            />

            <button type="submit">Authenticate</button>
          </form>

          {status === "empty" && (
            <div className="alert empty">
              ⚠️ System Alert: Fields cannot be empty
            </div>
          )}

          {status === "error" && (
            <div className="alert error">
              ❌ Access Denied: Invalid Credentials
            </div>
          )}

          {status === "success" && (
            <div className="alert success">
              ✅ Access Granted: Welcome to the Vault
            </div>
          )}

          <div className="hint">
            Demo Credentials → admin@vault.com / 12345
          </div>
        </div>
      </div>
    </>
  );
}
