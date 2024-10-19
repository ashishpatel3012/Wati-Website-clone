import "./footer.css";

import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer-container ">
          <div className="footer-links">
            <div className="col-1">
                <ul>
                    <li><h1 style={{color:"#4FC3F1"}}>Top Features</h1></li>
                    <li><a href="">Instagram DMs</a></li>
                    <li><a href="">Click to WhatsApp Ads</a></li>
                    <li><a href="">Catalog</a></li>
                    <li><a href="">Shared Team Inbox</a></li>
                    <li><a href="">Broadcast & Bulk Messages</a></li>
                    <li> <a href="">Custom Notifications</a></li>
                    <li><a href="">No Code Chatbot</a></li>
                    <li><a href="">KnowBot: AI-Powered Chat</a></li>

                    <li className="btm-border" style={{color:"#4FC3F1"}}> </li>

                    <li><h1 style={{color:"#FFE96E"}}>Solutions</h1></li>
                    <li><a href="">Education</a></li>
                    <li><a href="">Healthcare</a></li>
                    <li><a href="">Marketing Agencies</a></li>
                    <li><a href="">Sales Teams</a></li>
                    <li><a href="">Support Teams</a></li>
                    <li><a href="">Marketing Teams</a></li>
                </ul>             
            </div>

            <div className="col-2">
                <ul>
                    <li> <h1 style={{color:"#EAA9F0"}}>Integrations</h1></li>
                    <li> <a href="">Zoho</a></li>
                    <li> <a href="">Pabbly Connect</a></li>
                    <li> <a href="">Shopify</a></li>
                    <li> <a href="">WooCommerce</a></li>
                    <li> <a href="">Make aka Integromat</a></li>
                    <li> <a href="">Zapier</a></li>
                    <li> <a href="">HubSpot</a></li>
                    <li> <a href="">Google Sheets Sender</a></li>
                    <li> <a href="">WhatsApp Shop </a></li>
                    <li> <a href="">Backup WhatsApp Chats </a></li>
                    <li> <a href="">Klaviyo</a></li>
                </ul>
            </div>

            <div className="col-3">
                <ul> 
                    <li> <h1 style={{color:"#FFE96E"}}>Resources</h1></li>
                    <li> <a href="">Blog</a></li>
                    <li> <a href="">Ebooks</a></li>
                    <li> <a href="">Watipedia </a></li>
                    <li> <a href="">Wati Academy</a></li>
                    <li> <a href="">Udemy Course (Free)</a></li>
                    <li> <a href=""> WhatsApp Templates </a></li>
                    <li> <a href="">Customer Stories</a></li>
                    <li> <a href="">Developer Docs</a></li>
                    <li> <a href="">Brand Guidelines </a></li>
                    <li> <a href="">Help Center </a></li>
                    <li> <a href="">Community </a></li>

                    <li className="btm-border" style={{color:"#FFE96E"}}> </li>

                    <li> <h1 style={{color:"#EAA9F0"}}>Free WhatsApp Tools</h1></li>
                    <li> <a href="">WhatsApp Chat Link Generator</a></li>
                    <li> <a href="">WhatsApp QR Code Generator</a></li>
                    <li> <a href="">WhatsApp Chat Button Generator </a></li>
                </ul>
            </div>

            <div className="col-4">
                <ul>
                    <li> <h1 style={{color:"#00E785"}}>Wati</h1></li>
                    <li> <a href="">Pricing</a></li>
                    <li> <a href="">Product Overview</a></li>
                    <li> <a href="">Free Trial</a></li>
                    <li> <a href=""> Book a Demo</a></li>
                    <li> <a href="">Contact Us</a></li>
                    <li> <a href="">About Us</a></li>
                    <li> <a href="">Careers</a></li>
                    <li> <a href="">Become a Partner </a></li>
                    <li> <a href="">Become an Affiliate</a></li>
                </ul>    
            </div>

           
          </div>
          <div>
                <div className="footer-language-icon">
                    <img src="/images/Language-icon.svg" alt="" /><IoIosArrowDown style={{color:"white"}}/>
                </div>
            </div>
          <div className="footer-card">
            <img src="/images/footerLogos/Layer-1.png" alt="" />
            <img src="/images/footerLogos/Layer-2.png" alt="" />
            <img src="/images/footerLogos/Layer-3.png" alt="" />
            <img src="/images/footerLogos/Layer-4.png" alt="" />
            <img src="/images/footerLogos/Layer-5.png" alt="" />
            <img src="/images/footerLogos/Layer-6.png" alt="" />
            <img src="/images/footerLogos/Layer-7.png" alt="" />
          
          </div>

          <div>
            <div className="footer-Terms">
                <a href=""><b>© Wati 2024.Clare.ai Limited. All rights reserved.</b></a> 
                <br/>
                <a href=""> Terms & Conditions | </a>
                <a href="">  Privacy Policy </a>
            </div>
            <div className="footer-store">
                <a href=""><img src="/images/footerLogos/meeta.svg" alt="" /></a>
                <a href=""><img src="/images/footerLogos/googleStore.svg" alt="" /></a>
                <a href=""><img src="/images/footerLogos/appleStore.svg" alt="" /></a>
            </div>
            <div className="footer-logos">
                <a href=""><img src="/images/footerLogos/facebook-rect.svg" alt="" /></a>
                <a href=""><img src="/images/footerLogos/Twitter-x.svg" alt="" /></a>
                <a href=""><img src="/images/footerLogos/linkedin-rect.svg" alt="" /></a>
                <a href=""><img src="public/images/footerLogos/youtube-1.svg" alt="" /></a>
                <a href=""><img src="public/images/footerLogos/insta-1.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
