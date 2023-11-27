import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Content() {
    const images = ['biryani-cropped.jpg', 'indian-cropped.jpg', 'pizza-cropped.jpg', 'noodles-cropped.jpg', 'multiple-cropped.jpg'];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="site-content">
            <main>
                <section className="slider-div">
                    <Slider {...settings} className="my-slider">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img className="slider-img" src={image} alt="food" />
                            </div>
                        ))}
                    </Slider>
                </section>
                <section className="site-flexing">
                    <p>Flavour Fusion, a culinary haven where diverse tastes come together to create an extraordinary dining experience. True to its name, Flavour Fusion is a celebration of diverse culinary influences, crafting a menu that transcends traditional boundaries. The restaurant embraces a philosophy that blends global flavors with innovative twists, ensuring a memorable journey for every palate.<br /><br /><br />At Flavour Fusion, we take pride in curating a menu inspired by a rich tapestry of global cuisines. Our chefs craft each dish with meticulous attention to detail, presenting a fusion of flavors that harmoniously blend diverse culinary traditions. From mouthwatering entrees to delightful appetizers and artisanal desserts, our offerings are a true fusion of culinary artistry. <br /><br /></p>
                    <p style={{ border: "3px solid white", margin: "0px 44%", padding: "5px" }}><a href="/menu" style={{ textDecoration: "none", color: "white" }}>Explore Menu</a></p>
                </section>
            </main>
        </div>
    );
}

export default Content;