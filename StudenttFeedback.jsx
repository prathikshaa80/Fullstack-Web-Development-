import React, { useState } from "react";

const moods = [
  { level: 1, emoji: "😡", label: "Very Bad", color: "#ef4444" },
  { level: 2, emoji: "😕", label: "Bad", color: "#f97316" },
  { level: 3, emoji: "😐", label: "Okay", color: "#eab308" },
  { level: 4, emoji: "🙂", label: "Good", color: "#22c55e" },
  { level: 5, emoji: "😍", label: "Excellent", color: "#3b82f6" }
];

export default function StudentFeedback() {
  const [mood, setMood] = useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedMood = moods.find(m => m.level === mood);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .feedback-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #020617, #0f172a);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .panel {
          width: 90%;
          max-width: 750px;
          padding: 30px;
          border-radius: 24px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.6);
        }

        h2 {
          text-align: center;
        }

        .sub {
          text-align: center;
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 30px;
        }

        .mood-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .mood {
          flex: 1;
          margin: 0 6px;
          padding: 18px;
          border-radius: 16px;
          text-align: center;
          cursor: pointer;
          background: rgba(255,255,255,0.12);
          transition: transform 0.2s;
        }

        .mood:hover {
          transform: scale(1.1);
        }

        textarea {
          width: 100%;
          margin-top: 20px;
          padding: 14px;
          border-radius: 14px;
          border: none;
          outline: none;
          resize: none;
          font-size: 14px;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 14px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .summary {
          margin-top: 25px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="feedback-bg">
        <div className="panel">
          <h2>🎓 Student Feedback</h2>
          <div className="sub">How did this class make you feel?</div>

          {/* Mood Selector */}
          <div className="mood-bar">
            {moods.map(m => (
              <div
                key={m.level}
                className="mood"
                style={{
                  background:
                    mood === m.level ? m.color : "rgba(255,255,255,0.12)"
                }}
                onClick={() => {
                  setMood(m.level);
                  setSubmitted(false);
                }}
              >
                <div style={{ fontSize: "28px" }}>{m.emoji}</div>
                <div>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Comment */}
          {mood && (
            <textarea
              placeholder="Tell us why you feel this way..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          )}

          {mood && comment && !submitted && (
            <button onClick={() => setSubmitted(true)}>
              Submit Feedback
            </button>
          )}

          {submitted && (
            <div className="summary">
              <h3>📊 Feedback Received</h3>
              <p><b>Mood:</b> {selectedMood.emoji} {selectedMood.label}</p>
              <p><b>Comment:</b> {comment}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
