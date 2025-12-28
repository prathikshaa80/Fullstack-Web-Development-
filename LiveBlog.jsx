import React, { useState, useEffect } from "react";

export default function LiveBlog() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Simulated live users commenting
  useEffect(() => {
    const fakeUsers = ["Aarav", "Meera", "Kavin", "Diya"];
    const fakeTexts = [
      "This part really made me think 🤯",
      "Beautifully written!",
      "I relate to this so much.",
      "Waiting for the next post 👀"
    ];

    const interval = setInterval(() => {
      const autoComment = {
        id: Date.now(),
        user: fakeUsers[Math.floor(Math.random() * fakeUsers.length)],
        message: fakeTexts[Math.floor(Math.random() * fakeTexts.length)],
        time: new Date().toLocaleTimeString()
      };
      setComments(prev => [autoComment, ...prev]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const addComment = () => {
    if (!name || !text) return;

    const newComment = {
      id: Date.now(),
      user: name,
      message: text,
      time: "Just now"
    };

    setComments([newComment, ...comments]);
    setText("");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #020617, #0f172a);
          color: white;
          padding: 30px;
        }

        .layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 25px;
        }

        @media(max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }

        .blog {
          padding: 30px;
          border-radius: 24px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
        }

        .blog h1 {
          margin-top: 0;
        }

        .comments {
          padding: 20px;
          border-radius: 24px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
        }

        .comment {
          margin-bottom: 15px;
          padding: 12px;
          border-radius: 14px;
          background: rgba(0,0,0,0.4);
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .user {
          font-weight: 600;
          font-size: 14px;
        }

        .time {
          font-size: 11px;
          opacity: 0.6;
        }

        .message {
          margin-top: 5px;
          font-size: 14px;
        }

        .input-box {
          margin-top: auto;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 12px;
          border: none;
          outline: none;
        }

        button {
          width: 100%;
          margin-top: 10px;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          color: white;
          cursor: pointer;
        }
      `}</style>

      <div className="page">
        <div className="layout">
          {/* Blog Section */}
          <div className="blog">
            <h1>📝 The Quiet Power of Small Wins</h1>
            <p>
              We often wait for big achievements to feel proud, but it’s the
              small wins that quietly build momentum. Showing up. Trying again.
              Choosing yourself on ordinary days.
            </p>
            <p>
              Progress doesn’t shout. It whispers. And if you listen carefully,
              you’ll realize you’re already moving forward.
            </p>
          </div>

          {/* Comment Section */}
          <div className="comments">
            <h3>💬 Live Reader Thoughts</h3>

            {comments.map(c => (
              <div key={c.id} className="comment">
                <div className="user">{c.user}</div>
                <div className="time">{c.time}</div>
                <div className="message">{c.message}</div>
              </div>
            ))}

            <div className="input-box">
              <input
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <textarea
                rows="3"
                placeholder="Add your thoughts..."
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <button onClick={addComment}>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
