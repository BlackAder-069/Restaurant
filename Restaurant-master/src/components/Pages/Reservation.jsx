import React, { useState } from "react";
import backgroundImage from "../Images/Table.jpeg";


const ReservationForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    const data = {
      name,
      address,
      phone,
      email,
      date,
      time,
      guests
    };

    fetch('http://localhost:3001/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        window.location = '/'; // Redirect to home page
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(173, 216, 230, 0.75)",
          padding: "20px",
          borderRadius: "10px",
          width: "20%",
          height: "50%",
          margin: "0 auto",
          fontFamily: "Helvetica Neue",
        }}
      >
        <form method="POST" onSubmit={handleSubmit}>
          <h1 style={{ userSelect: "none", textAlign: "center" }}>
            Reserve a Table
          </h1>
          <table>
            <tbody>

              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="name">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="address">Address:</label>
                </td>
                <td>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="phone">Phone:</label>
                </td>
                <td>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="email" >Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="date">Date:</label>
                </td>
                <td>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    id="date"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="time">Time:</label>
                </td>
                <td>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    id="time"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ userSelect: "none" }} htmlFor="guests">Number of Guests:</label>
                </td>
                <td>
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    id="guests"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            style={{
              backgroundColor: isSubmitted ? 'green' : 'red',
              borderRadius: '20px',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              display: 'block',
              margin: '20px auto',
            }}
          >
            {isSubmitted ? 'Sent!' : 'Submit'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
