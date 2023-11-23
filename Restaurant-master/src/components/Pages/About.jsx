import React from "react";
import backgroundImage from "../Images/vegetables-set-left-black-slate.jpg";
import Header from "../header";

function About() {
  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: "Helvetica Neue",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // cover the entire viewport
          backgroundPosition: "center", // center the image
          backgroundRepeat: "no-repeat", // don't repeat the image
          height: "100vh", // full viewport height
          width: "100vw", // full viewport width
          color: "#fff", // white text color
          display: "flex",
          flexDirection: "column", // stack items vertically
          justifyContent: "flex-start", // align items to the start of the container
        }}
      >
        <h1
          style={{
            color: "Yellow", 
            fontSize: "2em",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          About Us
        </h1>
        <br />
        <br />
        <p
          style={{ fontSize: "1.5em", paddingLeft: "75px", userSelect: "none" }}
        >
          Welcome to Flavor Fusion, where culinary creativity knows no bounds!
          <br />
          Our restaurant is a melting pot of flavors, bringing together diverse
          tastes from around the globe
          <br /> to create a truly unique dining experience.
        </p>
        <p
          style={{ fontSize: "1.5em", paddingLeft: "75px", userSelect: "none" }}
        >
          At Flavor Fusion: 🌎 Explore a menu inspired by cuisines from Asia to
          the Americas. <br />
          🍲 Indulge in dishes crafted with locally-sourced, fresh ingredients.
          👨‍🍳 Meet our talented <br />
          chefs, each with a passion for pushing culinary boundaries.
        </p>
        <p
          style={{
            fontSize: "1.5em",
            paddingLeft: "75px",
            textAlign: "left",
            userSelect: "none",
          }}
        >
          Did you know? 🌶️ Our signature hot sauce is made from a secret blend
          of rare peppers.
        </p>
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
    </div>
  );
}

export default About;
