import React, { useEffect, useState } from "react";
import "../Pages/Project.css";
import res from "../Images/responsive.jpg";
import net from "../Images/netflix.jpg";
import age from "../Images/age calculator.png";
import game from "../Images/game.jpeg";
import image1 from '../Images/silder card.jpg';
import image2 from "../Images/c.jpg";
import image4 from "../Images/customer_.jpg";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import gimg from "../Images/github-removebg-preview.png";
import limg from "../Images/linkdein.jpg";
import fimg from "../Images/Facebook-removebg-preview.png";
import timg from "../Images/telegram-removebg-preview.png";
import inimg from "../Images/instagram.jpg";


function Project() {
  const images = [image1, image2, image4];
  return (
    <div>
      <div className="p-main">
        <div className="p-heading">
          <h3>some of my recent works</h3>
          <h1>Projects</h1>
        </div>

        <div className="cards">
          <div className="card">
            <img src={res} alt="" />
            <h3>Responsive Web Design</h3>
            <p>
              a simple tool which allows you to test your responsive website. I
              built this portfolio website using responsive design principles,
              so you can explore my work seamlessly on your desktop, tablet, or
              smartphone.
            </p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src={net} alt="" />
            <h3>Netflix Clone</h3>
            <p>
              a simple tool which allows you to test your responsive website. I
              built this portfolio website using responsive design principles,
              so you can explore my work seamlessly on your desktop, tablet, or
              smartphone.
            </p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src={age} alt="" />
            <h3>Age calculator</h3>
            <p>
              a simple tool which allows you to test your responsive website. I
              built this portfolio website using responsive design principles,
              so you can explore my work seamlessly on your desktop, tablet, or
              smartphone.
            </p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src={game} alt="" />
            <h3>Makeing Game Using JS</h3>
            <p>
              a simple tool which allows you to test your responsive website. I
              built this portfolio website using responsive design principles,
              so you can explore my work seamlessly on your desktop, tablet, or
              smartphone.
            </p>
            <button>Read More</button>
          </div>
        </div>

        <h1 className="clients">My Happy Clients</h1>
        <div className="slider">
          <Zoom scale={0.4}>
            {images.map((each, index) => (
              <img
                key={index}
                style={{ width: "100%", height: "400px" }}
                src={each}
              />
            ))}
          </Zoom>
        </div>
      </div>



      <footer className="p-footer">
        <a href="https://github.com/ParshotamKalathiya" className="p-f-icon">
          <img src={gimg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/kalathiya-parshotam-7b9454274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="p-f-icon"
        >
          <img src={limg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004269136228"
          className="p-f-icon"
        >
          <img src={fimg} alt="" style={{ width: "30px" }} />
        </a>
        <a href="https://t.me/ParasotamKalathiya" className="p-f-icon">
          <img src={timg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.instagram.com/parasotam_kalathiya?igsh=bmlyM3FwZ3AyOG5j"
          className="p-f-icon"
        >
          <img src={inimg} alt="" style={{ width: "30px" }} />
        </a>

        <div className="p-f-a">
          <a className="p-f-link" href="">Home</a>
          <a className="p-f-link" href="">About</a>
          <a className="p-f-link" href="">Project</a>
          <a className="p-f-link" href="">Contact</a>
        </div>

        <div className="p-copy">
          <p>	&#169;2024 : Designed by Parasotam Kalathiya</p>
        </div>
            <hr className="p-hr" />
      </footer>
    </div>
  );
}

export default Project;
