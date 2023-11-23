import React from "react";
import backgroundImage from "../Images/contact.jpeg";
import phoneIcon from "../Images/phone-icon.png";
import instagram from "../Images/Instagram-Outline.png";
import email from "../Images/Email.jpg";

const Contact = () => {
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2em", marginBottom: "20px", userSelect: "none" }}>
        Contact Us
      </h1>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
          width: "80%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1px",
            userSelect: "none",
          }}
        >
          <img
            src={phoneIcon}
            alt="Phone"
            style={{
              marginRight: "20px",
              width: "50px",
              height: "50px",
              userSelect: "none",
            }}
          />
          Phone: +91 9876543210
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "1px",
            paddingLeft: "500px",
            userSelect: "none",
          }}
        >
          <img
            src={email}
            alt="Email"
            style={{
              marginRight: "20px",
              width: "55px",
              height: "50px",
              userSelect: "none",
            }}
          />
          Email: falvor.fusion2018@gmail.com
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "1px",
            paddingLeft: "490px",
            userSelect: "none",
          }}
        >
          <img
            src={instagram}
            alt="Instagram"
            style={{
              marginRight: "1px",
              width: "75px",
              height: "50px",
              userSelect: "none",
            }}
          />
          Instagram: @flavor_fusion_49
        </p>
      </div>
      <div
        style={{
          position: "fixed",
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
  );
};

export default Contact;
