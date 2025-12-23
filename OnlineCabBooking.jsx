function App() {
  function bookCab() {
    alert("Welcome to QuickRide Cab Booking!");

    const name = prompt("Enter your name:");
    const pickup = prompt("Enter pickup location:");
    const drop = prompt("Enter drop location:");
    const distance = prompt("Enter distance in km:");

    const pricePerKm = 15;
    const totalFare = distance * pricePerKm;

    const confirmBooking = confirm(
      "Passenger Name: " + name +
      "\nPickup Location: " + pickup +
      "\nDrop Location: " + drop +
      "\nDistance: " + distance + " km" +
      "\nTotal Fare: ₹" + totalFare +
      "\n\nConfirm Cab Booking?"
    );

    if (confirmBooking) {
      alert("✅ Cab Booked Successfully!\nDriver will arrive soon.");
    } else {
      alert("❌ Cab Booking Cancelled.");
    }
  }

  const appStyles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    fontFamily: "'Arial', sans-serif",
  };

  const cardStyles = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px",
  };

  const buttonStyles = {
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
    color: "#fff",
    marginTop: "20px",
    transition: "0.3s",
  };

  const headingStyles = {
    marginBottom: "30px",
    color: "#333",
    fontSize: "28px",
    fontWeight: "bold",
  };

  return (
    <div style={appStyles}>
      <div style={cardStyles}>
        <h1 style={headingStyles}>🚖 QuickRide Cab Booking</h1>
        <p>Click the button below to book your cab instantly!</p>
        <button
          style={buttonStyles}
          onClick={bookCab}
          onMouseOver={e => e.target.style.transform = "scale(1.05)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >
          Book Cab
        </button>
      </div>
    </div>
  );
}

export default App;
