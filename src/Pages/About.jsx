import React, { useEffect } from "react";
import "../Pages/About.css";
import node from "../Images/n.png";
import mongo from "../Images/Mongodb.png";
import react from "../Images/react.png";
import python from "../Images/Python.png";
import html from "../Images/HTML5.png";
import css from "../Images/CSS3.png";
import js from "../Images/JavaScript.png";
import git from "../Images/github.png";
import corel from "../Images/corel.png";
import figma from "../Images/figma.png";
import illu from "../Images/Illustrator.png";
import photoshop from "../Images/photoshop.png";
import gimg from "../Images/github-removebg-preview.png";

import limg from "../Images/linkdein.jpg";

import fimg from "../Images/Facebook-removebg-preview.png";

import timg from "../Images/telegram-removebg-preview.png";

import inimg from "../Images/instagram.jpg";

import Aos from "aos";
import "aos/dist/aos.css"


function About() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration : 1000 
    })
  },[])
  return (
    <div>
      <div className="a-main">
        <img
          className="a-img" data-aos = "fade-right"
          src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-182.jpg"
          alt=""
        />
        <div className="a-text">
          <h1 className="a-heading">About Me</h1>
          <h1> I'm Parasotam Kalathiya.</h1> <br />
          <p className="a-p">
            I'm a passionate full-stack developer with a knack for crafting
            beautiful and functional web applications. I possess a strong
            foundation in both front-end and back-end development. I value clear
            communication and believe in working closely with clients to
            understand their needs and deliver exceptional results. I'm a
            full-stack developer with<b> 8+ Months of experience</b> in crafting
            beautiful and functional web applications. "with 8 Months of
            experience"
            <b>
              {" "}
              Web development, frontend developer, backend developer, API.
            </b>{" "}
            I leverage my expertise in{" "}
            <b> frameworks like React.js and Node.js</b> to design user-friendly
            front-ends and build robust back-end systems. My approach
            prioritizes clean code, scalability, and a focus on building
            user-centric experiences. For instance, in my previous role, I
            spearheaded the development of a new e-commerce platform, resulting
            in a 20% increase in customer conversions.
          </p>
        </div>
      </div>

        <h1 className="a-s-h1">MY SKILLS</h1>
      <div className="skill">
        <div className="text-img" data-aos = "fade-right" >
          <h2 className="text-img-h2 node">Node.Js</h2>
          <img src={node} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos = "fade-left">
          <h2 className="text-img-h2 mongo">MongoDB</h2>
          <img src={mongo} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-right">
          <h2 className="text-img-h2 react">React.Js</h2>
          <img src={react} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-left">
          <h2 className="text-img-h2">Python</h2>
          <img src={python} className="a-s-img" alt="" />
        </div>

        <div className="text-img" data-aos = "fade-right">
          <h2 className="text-img-h2 java">JavaScript</h2>
          <img src={js} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-left">
          <h2 className="text-img-h2 html">HTML</h2>
          <img src={html} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-right">
          <h2 className="text-img-h2 css">CSS</h2>
          <img src={css} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-left">
          <h2 className="text-img-h2">GitHub</h2>
          <img src={git} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-right">
          <h2 className="text-img-h2 corel">CorelDRAW</h2>
          <img src={corel} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-left">
          <h2 className="text-img-h2 figma">Figma</h2>
          <img src={figma} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-right">
          <h2 className="text-img-h2 illu">Illustrator</h2>
          <img src={illu} className="a-s-img" alt=""  />
        </div>

        <div className="text-img" data-aos = "fade-left">
          <h2 className="text-img-h2 photo">PhotoShop</h2>
          <img src={photoshop} className="a-s-img" alt="" />
        </div>
      </div>



      <footer className="a-footer">
        <a href="https://github.com/ParshotamKalathiya" className="a-f-icon">
          <img src={gimg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/kalathiya-parshotam-7b9454274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="a-f-icon"
        >
          <img src={limg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004269136228"
          className="a-f-icon"
        >
          <img src={fimg} alt="" style={{ width: "30px" }} />
        </a>
        <a href="https://t.me/ParasotamKalathiya" className="a-f-icon">
          <img src={timg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.instagram.com/parasotam_kalathiya?igsh=bmlyM3FwZ3AyOG5j"
          className="a-f-icon"
        >
          <img src={inimg} alt="" style={{ width: "30px" }} />
        </a>

        <div className="a-f-a">
          <a className="a-f-link" href="">Home</a>
          <a className="a-f-link" href="">About</a>
          <a className="a-f-link" href="">Project</a>
          <a className="a-f-link" href="">Contact</a>
        </div>

        <div className="a-copy">
          <p>	&#169;2024 : Designed by Parasotam Kalathiya</p>
        </div>
            <hr className="a-hr"/>
      </footer>

    </div>
  );
}

export default About;
