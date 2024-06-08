import React from "react";
import "../Pages/Contact.css";
import background from "../Video/earth.mp4";
import gimg from "../Images/github-removebg-preview.png";
import limg from "../Images/linkdein.jpg";
import fimg from "../Images/Facebook-removebg-preview.png";
import timg from "../Images/telegram-removebg-preview.png";
import inimg from "../Images/instagram.jpg";

function Contact() {
  return (
    <div>
      <div className="c-main">
      <video className='VideoTag' autoPlay loop muted>
      <source src={background} type='video/mp4'/>
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
          <a className="f-link" href="">Home</a>
          <a className="f-link" href="">About</a>
          <a className="f-link" href="">Project</a>
          <a className="f-link" href="">Contact</a>
        </div>

        <div className="copy">
          <p>	&#169;2024 : Designed by Parasotam Kalathiya</p>
        </div>
            <hr />
      </footer>
    </div>
  );
}

export default Contact;
