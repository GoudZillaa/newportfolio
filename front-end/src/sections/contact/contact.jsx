import React, { useState } from "react";
import redGif from "../../assets/red-rotate.gif";
import booth from "../../assets/booth.png";
import "./contact.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const contact = ({ id }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [numCopied,setNumCopied]= useState(false)
  const email = "contactabhaygoud@gmail.com";
  const number="+91 9137150142"
  
  const handleCopy=()=>{
    navigator.clipboard.writeText(email).then(()=>{
      setCopied(true);
      setTimeout(()=>{
        setCopied(false)  
      },3000)
    })
  }
  const handleNumCopy=()=>{
    navigator.clipboard.writeText(number).then(()=>{
      setNumCopied(true);
      setTimeout(()=>{
        setNumCopied(false)
      },3000)
    })
  }
  return (
    <div id={id}>
      <div className="normal_view">
        <div className="title_div">
          <h2>Contact Me</h2>
          <div className="subTitle">
            <p>Click on the phone booth for contact info and resume </p><ArrowForwardIcon className="arrow"/>   
          </div>
        </div>   
        <div className="gif_container">
          <img onClick={() => setIsClicked(true)} src={redGif} alt="gif" />
        </div>
      </div>
      {isClicked && (
        <div className="contact_container">
          <div className="contact_card">
            <div className="image_card">
              <img id="booth" src={booth} alt="booth" />
            </div>

            <div className="contact_section">
              <h3 className="contact_info">Get in Touch!</h3>
              <div className="phoneNo_icons">
                <CallIcon/>
                <WhatsAppIcon/>
                <p>+91 9137150142
                  <button className="copy_btn" onClick={()=>handleNumCopy()}>{numCopied?"copied":"copy"}</button>
                </p>
              </div>
              <div className="buttons_div">
                
                <p>
                    contactabhaygoud@gmail.com
                  <button className="copy_btn" onClick={()=>handleCopy()}>{copied?"copied":"copy"}</button>
                </p>
                <div className="resume_link">
                  <a href='/resume.pdf' rel="noopener noreferrer" target="_blank">Resume</a>
                  <ArrowOutwardIcon/>
                </div>
                <div onClick={() => setIsClicked(false)} className="cancel_button">
                  Cancel
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default contact;
