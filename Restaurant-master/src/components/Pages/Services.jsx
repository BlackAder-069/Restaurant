import React from "react";
import backgroundImage from "../Images/Services-Pic.jpg";

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily:"Helvetica Nueue", 
        fontWeight: "bold",
      }}
    >
      <h1
        style={{ textAlign: "center", paddingTop: "50px", userSelect: "none"}}
      >
        Our Services
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            width: "30%",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <h2>Dine-In</h2>
          <p>Enjoy our food in a comfortable environment</p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            width: "30%",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <h2>Takeout</h2>
          <p>Pick up your food and enjoy it at home</p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            width: "30%",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <h2>Delivery</h2>
          <p>We'll deliver your food right to your door</p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            width: "30%",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <h2>Catering for birthdays and special occasions</h2>
          <p>We provide catering services for your special events</p>
        </div>
        <div
          style={{
            position: "fixed",
            fontWeight: "lighter",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            userSelect: "none",
          }}
        >
          ©2022 Fusion Flavor
        </div>
      </div>
    </div>
  );
};

export default Services;
