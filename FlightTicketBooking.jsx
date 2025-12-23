function App() {

  function bookTicket() {
    alert("Welcome to SkyWays Flight Booking!");

    const name = prompt("Enter your name:");
    const from = prompt("Enter departure city:");
    const to = prompt("Enter destination city:");
    const tickets = prompt("Enter number of tickets:");

    const price = 5000;
    const total = tickets * price;

    const confirmBooking = confirm(
      "Passenger Name: " + name +
      "\nFrom: " + from +
      "\nTo: " + to +
      "\nTickets: " + tickets +
      "\nTotal Price: ₹" + total +
      "\n\nConfirm Booking?"
    );

    if (confirmBooking) {
      alert("Booking Confirmed!\nThank you for choosing SkyWays Airlines.");
    } else {
      alert("Booking Cancelled.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Flight Ticket Booking</h1>
      <button onClick={bookTicket}>Book Ticket</button>
    </div>
  );
}

export default App;
