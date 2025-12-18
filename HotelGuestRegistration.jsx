import React from "react";

export default function HotelGuestRegistration() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Guest Registered Successfully!");
  }

  return (
    <>
      <div>
        {/* Internal CSS */}
        <style>{`
          body {
          background-image: url("https://as1.ftcdn.net/v2/jpg/03/05/48/86/1000_F_305488633_0zyaKrG93ON4a33QCNLYD4qZm8cgZh7Q.jpg/");
");       background-color:pink;
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
          }
          .form-container {
            width: 380px;
            padding: 22px;
            margin: 60px auto;
            border: 1px solid #aaa;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.92);
            font-family: Arial;
          }
          .form-container h2 {
            text-align: center;
            margin-bottom: 15px;
          }
          .form-container input,
          .form-container textarea,
          .form-container select {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #999;
            border-radius: 5px;
          }
          .radio-group,
          .checkbox-group {
            margin: 8px 0;
          }
          .btn-submit {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: none;
            background: #0b5f14;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          }
        `}</style>

        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Hotel Guest Registration</h2>

          {/* Text Field */}
          <input type="text" name="guestName" placeholder="Guest Name" required />

          {/* Password Field */}
          <input type="password" name="password" placeholder="Create Password" required />

          {/* Dropdown */}
          <select name="roomType" required>
            <option value="">Select Room Type</option>
            <option value="Single">Single Room</option>
            <option value="Double">Double Room</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Luxury Suite</option>
          </select>

          {/* Radio Buttons */}
          <div className="radio-group">
            <label><input type="radio" name="stayType" value="Business" required /> Business Stay</label><br />
            <label><input type="radio" name="stayType" value="Personal" required /> Personal Stay</label>
          </div>

          {/* Checkboxes */}
          <div className="checkbox-group">
            <label><input type="checkbox" /> Breakfast</label><br />
            <label><input type="checkbox" /> Swimming Pool Access</label><br />
            <label><input type="checkbox" /> Spa Facility</label>
          </div>

          {/* Text Area */}
          <textarea name="address" rows="3" placeholder="Guest Address" required />

          {/* File Upload */}
          <input type="file" name="idProof" required />

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </>
  );
}
