
import { useState } from "react";
import "./header.css";


import { CgMenuRightAlt } from "react-icons/cg";

import { IoIosArrowDown } from "react-icons/io";


import { RiArrowRightSLine } from "react-icons/ri";


const Header = () => {
  
const [showMenu, setShowMenu] = useState(false);
const [showSubMenu1, setShowSubMenu1] = useState(false);
const [showSubMenu2, setShowSubMenu2] = useState(false);
const [showSubMenu3, setShowSubMenu3] = useState(false);
const [showSubMenu4, setShowSubMenu4] = useState(false);
const [showSubMenu5, setShowSubMenu5] = useState(false);



const handleMenuBtn = ()=>{
 
 if(showMenu == false){
  setShowMenu(true)
 } else{
  setShowMenu(false)
 }

}


const handleSub1 = ()=>{
 if(showSubMenu1 == false){
  setShowSubMenu1(true)
 } else{
  setShowSubMenu1(false)
 }
}
const handleSub2 = ()=>{
 if(showSubMenu2 == false){
  setShowSubMenu2(true)
 } else{
  setShowSubMenu2(false)
 }
}
const handleSub3 = ()=>{
 if(showSubMenu3 == false){
  setShowSubMenu3(true)
 } else{
  setShowSubMenu3(false)
 }
}
const handleSub4 = ()=>{
 if(showSubMenu4 == false){
  setShowSubMenu4(true)
 } else{
  setShowSubMenu4(false)
 }
}
const handleSub5 = ()=>{
 if(showSubMenu5 == false){
  setShowSubMenu5(true)
 } else{
  setShowSubMenu5(false)
 }
}

  return (
    <>
      <div className="">
        <div className="header_text">
          <p>Now manage Whatsapp & Instagram DMs from the same dashboard </p>
          <button>Learn more</button>
        </div>

        <nav className="navbar container ">
          <div className="nav-parent">
          <div>
            <a href="">
              <img src=".\images\wati-logo-1.svg" alt="" />
            </a>
          </div>
          
            <div className={"menuMobile " + (showMenu ?  'showMenu'  : ' ')}  >
              <ul className="dropdown">
              <li><a href="">Pricing</a></li>
              
                  <div className="subMenu-box">                  
                  <li><a onClick={handleSub1}>Features <span style={{marginTop:"5px"}} ><IoIosArrowDown style={{alignSelf:"center" }}/></span>  </a>
                      <ul className={"menuSubMobile " + (showSubMenu1 ? "showSubMenu" : " ")}>
                              <li><a tabIndex="-1" href="#">Instagram DMs</a></li>
                              <li><a tabIndex="-1" href="#">Click to WhatsApp Ads</a></li>
                              <li><a tabIndex="-1" href="#">Catalog</a></li>
                              <li><a tabIndex="-1" href="#">Shared Team Inbox</a></li>
                              <li><a tabIndex="-1" href="#">Broadcast & Bulk Messages</a></li>
                              <li><a tabIndex="-1" href="#">Custom Notifications</a></li>
                              <li><a tabIndex="-1" href="#">No Code Chatbot</a></li>
                              <li><a tabIndex="-1" href="#">KnowBot: AI-Powered Chat</a></li>                    
                          </ul>
                  </li>
                  </div>

                  <div className="subMenu-box">
                  <li><a onClick={handleSub2} >Solutions <span style={{marginTop:"5px"}} ><IoIosArrowDown style={{alignSelf:"center" }}/></span>  </a>
                  <ul className={"menuSubMobile " + (showSubMenu2 ? "showSubMenu" : " ")}>
                              <li><a tabIndex="-1" href="#">Education</a></li>
                              <li><a tabIndex="-1" href="#">Marketing Agencies</a></li>
                              <li><a tabIndex="-1" href="#">Sales Teams</a></li>
                              <li><a tabIndex="-1" href="#">Marketing Teams</a></li>
                              <li><a tabIndex="-1" href="#">Customer Support</a></li>
                              <li><a tabIndex="-1" href="#">Ecommerce</a></li>
                              <li><a tabIndex="-1" href="#">Healthcare</a></li>
                              <li><a tabIndex="-1" href="#">KnowBot: AI-Powered Chat</a></li>                    
                          </ul>
                  </li>
                  </div>
                  <div className="subMenu-box">
                  <li><a onClick={handleSub3} >Integrations <span style={{marginTop:"5px"}} ><IoIosArrowDown style={{alignSelf:"center" }}/></span>  </a>
                  <ul className={"menuSubMobile " + (showSubMenu3 ? "showSubMenu" : " ")}>
                              <li><a tabIndex="-1" href="#">Zoho CRM</a></li>
                              <li><a tabIndex="-1" href="#">Shopify</a></li>
                              <li><a tabIndex="-1" href="#">WooCommerce</a></li>
                              <li><a tabIndex="-1" href="#">Zapier</a></li>
                              <li><a tabIndex="-1" href="#">HubSpot</a></li>
                              <li><a tabIndex="-1" href="#">Pabbly Connect</a></li>
                              <li><a tabIndex="-1" href="#">Make aka Integromat</a></li>
                              <li><a tabIndex="-1" href="#">WhatsApp Shop</a></li>
                              <li><a tabIndex="-1" href="#">Chat Backup</a></li>
                              <li><a tabIndex="-1" href="#">Google Sheet Sender</a></li>
                              <li><a tabIndex="-1" href="#">Klaviyo</a></li>
                              <li><a tabIndex="-1" href="#">Zoho Flow</a></li>
                                              
                          </ul>
                  </li>
                  </div>
                  <div className="subMenu-box">
                  <li><a onClick={handleSub4} >Affiliate/Partners <span style={{marginTop:"5px"}} ><IoIosArrowDown style={{alignSelf:"center" }}/></span>  </a>
                  <ul className={"menuSubMobile " + (showSubMenu4 ? "showSubMenu" : " ")}>
                              <li><a tabIndex="-1" href="#">Become an Affiliate</a></li>
                              <li><a tabIndex="-1" href="#">Become a Partner</a></li>
                                            
                          </ul>
                  </li>
                  </div>
                  <div className="subMenu-box">
                  <li><a onClick={handleSub5} >Resources <span style={{marginTop:"5px"}} ><IoIosArrowDown style={{alignSelf:"center" }}/></span>  </a>
                  <ul className={"menuSubMobile " + (showSubMenu5 ? "showSubMenu" : " ")}>
                              <li><a tabIndex="-1" href="#">Blogs</a></li>
                              <li><a tabIndex="-1" href="#">Free Ebooks</a></li>
                              <li><a tabIndex="-1" href="#">Customer Stories</a></li>
                              <li><a tabIndex="-1" href="#">Watipedia</a></li>
                              <li><a tabIndex="-1" href="#">Wati Academy (Free)</a></li>
                              <li><a tabIndex="-1" href="#">Free Udemy Course</a></li>
                              <li><a tabIndex="-1" href="#">WhatsApp Templates (Free)</a></li>
                              <li><a tabIndex="-1" href="#">Brand Guidelines </a></li>                    
                              <li><a tabIndex="-1" href="#">Chatbot library</a></li>                    
                          </ul>
                  </li>
                  </div>
                  
                  
                  <div className="dropMenu-btn">
                    <button className="main-button white-btn" >Book Demo</button>          
                    <button className="main-button">Free Trial</button>           
                  </div>
              </ul>    
                        
          </div>
          </div>
          <div className="menu-btn"> <a onClick={handleMenuBtn}><CgMenuRightAlt className="menu-btn-logo" /></a> </div>
        </nav>

        <div className="home-container ">

          <div className="home-box-1 ">
            <div className="image-box" style={{backgroundImage:'url("./images/wati-dashboard-new.webp")'}} >
            <img src=".\images\wati-communicate.webp" alt="" />
            </div>
          </div>

          <div className="home-box-2">
            <h1>
              Grow your business on{" "}
              <span style={{ color: "#25E271" }}>WhatsApp</span>
            </h1>
            <p>
              Personalize communication and sell more with the WhatsApp Business
              API platform that automates marketing, sales, service and support.
            </p>
             
            <div className="btn-bookdemo">
              <button className="main-button">Free 7 Day Trial</button>
              <a href="" className="book-link">
                or Book a Demo Today <RiArrowRightSLine />
              </a>
            </div>
            <div>
              <a href="" className="no-card ">
                <img
                  style={{ width: "25px" }}
                  src="\images\No-card-icon.svg"
                  alt=""
                />
                No credit card required
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
