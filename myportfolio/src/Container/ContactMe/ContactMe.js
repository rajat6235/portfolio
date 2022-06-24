import React, { useState } from 'react';
import Typical from 'react-typical'
import { toast } from "react-toastify";
import axios from 'axios'
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeadings/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './ContactMe.css'

export default function ContactMe(props) {
    let fadeInScreenHandler =(screen)=>{
        if (screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
const [banner,setBanner] = useState("")
const [bool,setBool] = useState("")

const handleName = (e) =>{
    setName(e.target.value);
};
const handleEmail = (e) =>{
    setEmail(e.target.value);
};
const handleMessage = (e) =>{
    setMessage(e.target.value);
};

const submitForm= async(e)=>{
    e.preventDefault();
    try {
        let data={
            name,
            email,
            message,
        };
        setBool(true)
        const res = await axios.post(`/contact`,data)
        if(name.length===0 || email.length===0 || message.length===0 ){
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)
        }else if(res.status===200){
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)
        }
    } catch (error) {
        console.log(error)
        
    }
  

}

return (
    <div className='main-container fade-in' id={props.id || ''}>
        <ScreenHeading
        subHeading ={"Lets keep In Touch"}
        title={"Contact me"}
        />
        <div className='central-form'>
            <div className='col'>
            <h2 className='title'> 
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get In Touch 📧",
                    1000,
                  ]}
                />
              </h2>
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>{" "}
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>{" "}
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="add links to github etc here">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send Your Email Here!</h4>
                    <img src ={imgBack} alt='not found'/>
                </div>
                <form onSubmit={submitForm}>
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    onChange={handleName} value={name}
                    />

                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    onChange={handleEmail} value={email}
                    />

                    <label htmlFor='message'>Message</label>
                    <input type='text'
                    onChange={handleMessage} value={message}
                    />

                    <div className='send-btn'>
                        <button type='submt'>
                            send 
                            <i className='fa fa-paper-plane'/>
                            {bool?(<b className='load'>
                                <img src={load1} alt='not responding'/> ;
                            </b>):("")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
