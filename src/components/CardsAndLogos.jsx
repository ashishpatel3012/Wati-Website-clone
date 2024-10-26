
import "./CardsAndLogos.css"
const CardsAndLogos = () => {
  return (
   
   <div>

            <div className="two-cards">
            <ul className="circles"> <li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li></ul>
                <div className="container two-cards-box ">
                    <div className="title">
                        <h1>Over 10,000 customers</h1>
                        <p>What some of our 10,000+ customers across 160+ countries think of Wati.</p>
                    </div>
                    <div className="cards-box">
                        <div className="cardss">
                            <h1>“Highly customisable and friendly”</h1>
                            <p>We work in the hotel business, so keeping in touch with people travelling is very easy using WhatsApp. Wati help us to have multiple people answering guests. It also allows us to automate basic replies such as the address</p>
                            <div>
                            <h3><b>Eduardo Zeballos</b></h3>
                            {/* <br/> */}
                            <p> Marketing Manager,Hotel Rosario</p>
                            </div>
                        </div>
                        <div className="cardss">
                            <h1>“Great product for early-stage startups”</h1>
                            <p>Wati is flexible, unlike a lot of other WhatsApp business solutions out there. As an early startup, we work on Google sheets and website forms. We do not have phone support. WhatsApp is our only support channel. Wati helps us manage customer interactions on WhatsApp seamlessly at a very reasonable cost.</p>
                            <div>
                            <h3><b>Pradeep Dodle</b></h3>
                            {/* <br/> */}
                            <p> Co-founder, Superfone</p>
                            </div>
                        </div>
                        
                    </div>
                </div>     
            </div>


      <div className="container cmpny-logos-box">
            <div>
                <h1><b>Integrations.</b> Native integration lets you connect your favorite cloud apps in your tech stack.</h1>
            </div>
            <div className="cmpny-logos">
                <ul>
                    <li><img src="/images/lastLogos/zoho.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/shopify_logo_whitebg.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/google-sheets-full-logo-1.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/Hubspot.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/zapier-logo_black.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/Pabbly-Connect-SVG.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/woocommerce-logo-color-black.svg" alt="" /></li>
                    <li><img src="/images/lastLogos/make.svg" alt="" /></li>
                </ul>            
            </div>

            <div className="bluebtn-card">
                <div>
                    <button className="main-button blue-btn">Free 7 Day Trial</button>
                </div>
                <div>
                    <a href="" className=" "><img style={{ width: "25px" }}src="\images\No-card-icon.svg" alt=""/> No credit card required </a>
                </div>
            </div>

      </div>



      <div className="container face-card-box">
            <div className="face-card-box-title">
                <h1>Choose the Wati advantage</h1>
                <p>Use Wati to engage your prospects through the WhatsApp Business API</p>
            </div>
            <div className="card-box container">
                <div className="cards">
                    <div><img src="/images/brk.webp" alt="" /></div>
                    <h1>Break engagement barriers</h1>
                    <p>Engage using WhatsApp and improve response rates over email, SMS and in-app messaging and campaigning.</p>
                </div>
               
                <div className="cards">
                    <div><img src="/images/ups.webp" alt="" /></div>
                    <h1>A better way to upscale</h1>
                    <p>Upscale with multiple users on one single number and get a better return on investment than alternative WhatsApp BSPs.</p>
                </div>
                <div className="cards">
                    <div><img src="/images/sscale.webp" alt="" /></div>
                    <h1>Communicate at scale efficiently</h1>
                    <p>Easily start and manage conversations with thousands of customers and prospects through automation, chatbots and custom workflows.</p>
                </div>
                <div className="cards"> 
                    <div><img src="/images/chhnl.webp" alt="" /></div>
                    <h1>Multiple channels in one</h1>
                    <p>Nurture leads from Facebook and Instagram and increase ROI 10x by funneling your leads to WhatsApp.</p>
                </div>
            </div>
            
            
            <div className="green-card">
                <div >
                    <h1><b>Discover more.</b> WhatsApp, Facebook and Instagram’s share of social media messaging is unrivaled. Harness it with one of the fastest growing WhatsApp Business Solution Providers.</h1>
                </div>
                <div className="green-card-btns" >
                    <button className="main-button white-btn">Free 7 Day Trial</button>
                    <button className="green-btn demo-btn " >Book Demo</button>
                </div>
            </div>
            
      </div> 

      

      


   </div>
  )
}

export default CardsAndLogos