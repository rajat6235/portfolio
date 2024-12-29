import React, { useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import axios from "axios";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeadings/ScreenHeading.tsx";
import ScrollService from "../../utilities/ScrollService.ts";
import Animations from "../../utilities/Animations.ts";
import Footer from "../Home/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`https://portfoliobackend-79k1.onrender.com/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      }
      else if  (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {  
        toast.error(res.data.msg);
        setBool(false);
       } 
      else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep In Touch"} title={"Contact me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://www.linkedin.com/in/rajat6235/">
                <i  title="Linkedin" className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/rajat6235">
                <i  title="Github" className="fa fa-github"></i>
              </a>
              <a href="tel:7837733549"> 
              <i  title="Phone" className="fa fa-phone"></i>
               </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="text" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submt">
                

              {bool ? (
            <b className="load">
              <img src={load1} alt="not responding" />
            </b>
          ) : (
            <p>
              Send
              <i className="fa fa-paper-plane plane" />
            </p>
          )}
              </button>
            </div>
          </form>
        </div>
      </div>

  <div className="trademark-text">
  Designed & Developed by Rajat Gupta
  <i className="fa-solid fa-hand-peace" ></i>
</div>
    </div>
  );
}
