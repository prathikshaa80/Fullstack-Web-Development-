function App() {

  function reserveRoom() {
    alert("Welcome to Grand Palace Hotel!");

    const name = prompt("Enter your name:");
    const roomType = prompt("Enter room type (Single / Double / Deluxe):");
    const days = prompt("Enter number of days to stay:");

    let price = 0;

    if (roomType === "Single") {
      price = 2000;
    } else if (roomType === "Double") {
      price = 3500;
    } else if (roomType === "Deluxe") {
      price = 5000;
    } else {
      alert("Invalid room type!");
      return;
    }

    const totalAmount = days * price;

    const confirmBooking = confirm(
      "Guest Name: " + name +
      "\nRoom Type: " + roomType +
      "\nDays: " + days +
      "\nTotal Amount: ₹" + totalAmount +
      "\n\nConfirm Reservation?"
    );

    if (confirmBooking) {
      alert("Reservation Confirmed!\nEnjoy your stay.");
    } else {
      alert("Reservation Cancelled.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Hotel Reservation System</h1>
      <button onClick={reserveRoom}>Reserve Room</button>
    </div>
  );
}

export default App;
