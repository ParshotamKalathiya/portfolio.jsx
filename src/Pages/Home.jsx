import React from "react";
import "../Pages/Home.css";
import Typewriter from "typewriter-effect";
import pimg from "../Images/mypic.png";
import gimg from "../Images/github-removebg-preview.png";
import limg from "../Images/linkdein.jpg";
import fimg from "../Images/Facebook-removebg-preview.png";
import timg from "../Images/telegram-removebg-preview.png";
import inimg from "../Images/instagram.jpg";

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
import myapic from "../Images/mypic-a.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import "../Pages/Project.css";
import res from "../Images/responsive.jpg";
import net from "../Images/netflix.jpg";
import age from "../Images/age calculator.png";
import game from "../Images/game.jpeg";
import image1 from "../Images/Slider.jpg";
import image2 from "../Images/slider1.jpg";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "../Pages/Contact.css";
import background from "../Video/earth.mp4";

function Home() {
  useEffect(() => {
    Aos.init(
      {
        offset: 200,
        duration: 1000,
      },
      []
    );
  });
  const images = [image1, image2];
  return (
    <div>
      <div className="main">
        <div className="view">
          <div className="intro">
            <h1 className="heading-text">
              <h1 className="my-name" data-aos="fade-down">
                Hi, i am <br />
                Parasotam Kalathiya
              </h1>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h3 data-aos="fade-down">
              As a Full Stack Web Developer, I have successfully designed and
              implemented numerous projects, showcasing my ability to deliver
              high-quality solutions. I am skilled in both front-end and
              back-end development, utilizing languages such as HTML, CSS,
              JavaScript, React.js, Node.js, MySQL, MongoDB, API.
            </h3>

            <br />
            <button className="hire-btn">
              <a href="/Contact">Hire Me</a>
            </button>

            <a href="https://github.com/ParshotamKalathiya" className="h-icon">
              <img src={gimg} alt="" style={{ width: "30px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/kalathiya-parshotam-7b9454274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="h-icon"
            >
              <img src={limg} alt="" style={{ width: "30px" }} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004269136228"
              className="h-icon"
            >
              <img src={fimg} alt="" style={{ width: "30px" }} />
            </a>
            <a href="https://t.me/ParasotamKalathiya" className="h-icon">
              <img src={timg} alt="" style={{ width: "30px" }} />
            </a>
            <a
              href="https://www.instagram.com/parasotam_kalathiya?igsh=bmlyM3FwZ3AyOG5j"
              className="h-icon"
            >
              <img src={inimg} alt="" style={{ width: "30px" }} />
            </a>
          </div>
          <div className="port-img">
            <img className="p-img" src={pimg} alt="" data-aos="zoom-in-up" />
          </div>
        </div>
      </div>

      <div className="a-main" id="Home">
        <img
          className="a-img"
          data-aos="flip-left"
          data-aos-anchor-placement="top-bottom"
          src={myapic}
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
        <div className="text-img" data-aos="fade-left">
          <h2 className="text-img-h2 node">Node.Js</h2>
          <img src={node} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="fade-right">
          <h2 className="text-img-h2 mongo">MongoDB</h2>
          <img src={mongo} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 react">React.Js</h2>
          <img src={react} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2">Python</h2>
          <img src={python} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 java">JavaScript</h2>
          <img src={js} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 html">HTML</h2>
          <img src={html} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 css">CSS</h2>
          <img src={css} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2">GitHub</h2>
          <img src={git} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 corel">CorelDRAW</h2>
          <img src={corel} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 figma">Figma</h2>
          <img src={figma} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 illu">Illustrator</h2>
          <img src={illu} className="a-s-img" alt="" />
        </div>
        <div className="text-img" data-aos="flip-left">
          <h2 className="text-img-h2 photo">PhotoShop</h2>
          <img src={photoshop} className="a-s-img" alt="" />
        </div>
      </div>

      <div className="p-main">
        <div className="p-heading">
          <h3>some of my recent works</h3>
          <h1>Projects</h1>
        </div>

        <div className="cards">
          <div className="card" data-aos="fade-left">
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
          <div className="card" data-aos="fade-left">
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
          <div className="card" data-aos="fade-left">
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
          <div className="card" data-aos="fade-left">
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
          <Zoom scale={0.4} duration={2000}>
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

      <div className="c-main">
        <div className="c-heading">
          <h1>Contact Me</h1>
        </div>
        <video className="VideoTag" autoPlay loop muted>
          <source src={background} type="video/mp4" />
        </video>
        <form action="">
          <h1 className="c-h1">Contact</h1>
          <table>
            <tr>
              <td>Frist Name :</td>
              <input type="text" name="" id="" placeholder="John" required />
            </tr>
            <tr>
              <td>Last Name :</td>
              <input type="text" name="" id="" placeholder="Cena" required />
            </tr>
            <tr>
              <td>Email :</td>
              <input
                type="email"
                name=""
                id=""
                placeholder="johncena@gmail.com"
                required
              />
            </tr>
            <tr>
              <td>Mobile No :</td>
              <select name="" id="" required placeholder="+1">
                <option value="">+1</option>
                <option value="">+2</option>
                <option value="">+3</option>
                <option value="">+4</option>
                <option value="">+5</option>
                <option value="">+6</option>
                <option value="">+7</option>
                <option value="">+8</option>
                <option value="">+9</option>
                <option value="">+10</option>
                <option value="">+11</option>
                <option value="">+12</option>
                <option value="">+13</option>
                <option value="">+14</option>
                <option value="">+15</option>
                <option value="">+16</option>
                <option value="">+17</option>
                <option value="">+18</option>
                <option value="">+19</option>
                <option value="">+20</option>
                <option value="">+21</option>
                <option value="">+22</option>
                <option value="">+23</option>
                <option value="">+24</option>
                <option value="">+25</option>
                <option value="">+26</option>
                <option value="">+27</option>
                <option value="">+28</option>
                <option value="">+29</option>
                <option value="">+30</option>
                <option value="">+31</option>
                <option value="">+32</option>
                <option value="">+33</option>
                <option value="">+34</option>
                <option value="">+35</option>
                <option value="">+36</option>
                <option value="">+37</option>
                <option value="">+38</option>
                <option value="">39</option>
                <option value="">+40</option>
                <option value="">+50</option>
                <option value="">+51</option>
                <option value="">+52</option>
                <option value="">+53</option>
                <option value="">+54</option>
                <option value="">+54</option>
                <option value="">+55</option>
                <option value="">+56</option>
                <option value="">+57</option>
                <option value="">+58</option>
                <option value="">+59</option>
                <option value="">+60</option>
                <option value="">+61</option>
                <option value="">+61</option>
                <option value="">+62</option>
                <option value="">+63</option>
                <option value="">+64</option>
                <option value="">+65</option>
                <option value="">+66</option>
                <option value="">+67</option>
                <option value="">+68</option>
                <option value="">+69</option>
                <option value="">+70</option>
                <option value="">+71</option>
                <option value="">+72</option>
                <option value="">+73</option>
                <option value="">+74</option>
                <option value="">+75</option>
                <option value="">+76</option>
                <option value="">+77</option>
                <option value="">+78</option>
                <option value="">+79</option>
                <option value="">+80</option>
                <option value="">+81</option>
                <option value="">+82</option>
                <option value="">+83</option>
                <option value="">+84</option>
                <option value="">+85</option>
                <option value="">+86</option>
                <option value="">+87</option>
                <option value="">+88</option>
                <option value="">+89</option>
                <option value="">+90</option>
                <option value="">+91</option>
                <option value="">+92</option>
                <option value="">+93</option>
                <option value="">+94</option>
                <option value="">+95</option>
                <option value="">+96</option>
                <option value="">+97</option>
                <option value="">+98</option>
                <option value="">+99</option>
              </select>
              <input
                type="tel"
                name=""
                id="number"
                placeholder="1234567890"
                minLength={10}
                maxLength={11}
                required
              />
            </tr>
            <tr>
              <td>Message :</td>
              <textarea
                name=""
                id=""
                cols={50}
                rows={5}
                placeholder="Please Type Your Message..."
              ></textarea>
            </tr>
            <button className="c-button">Contact</button>
          </table>
        </form>
      </div>

      <footer>
        <a href="https://github.com/ParshotamKalathiya" className="f-icon">
          <img src={gimg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/kalathiya-parshotam-7b9454274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="f-icon"
        >
          <img src={limg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004269136228"
          className="f-icon"
        >
          <img src={fimg} alt="" style={{ width: "30px" }} />
        </a>
        <a href="https://t.me/ParasotamKalathiya" className="f-icon">
          <img src={timg} alt="" style={{ width: "30px" }} />
        </a>
        <a
          href="https://www.instagram.com/parasotam_kalathiya?igsh=bmlyM3FwZ3AyOG5j"
          className="f-icon"
        >
          <img src={inimg} alt="" style={{ width: "30px" }} />
        </a>

        <div className="f-a">
          <a className="f-link" href="">
            Home
          </a>
          <a className="f-link" href="">
            About
          </a>
          <a className="f-link" href="">
            Project
          </a>
          <a className="f-link" href="">
            Contact
          </a>
        </div>

        <div className="copy">
          <p> &#169;2024 : Designed by Parasotam Kalathiya</p>
        </div>
        <hr />
      </footer>
    </div>
  );
}

export default Home;
