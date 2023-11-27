import React, { useState, useEffect } from "react";
import Header from "../header";
import Card from "../card";
import Footer from "../footer";

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/menu')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMenuItems(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);
    return (
        <div>
            <Header />
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "55px", fontFamily: "roboto bold" }}>MENU</h1>
                <div className="menu-container">
                    {menuItems.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;