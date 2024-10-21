
import "./BennerCards.css"



const BennerCards = () => {
  return (
    
    <div>
        <div className="benner-box container">

            {/* <div className="title"> */}
                <h2 >Features</h2>
            {/* </div > */}

            <div className="benner-cards">
                <div className="benner-cards-box">
                    <div ><img src="/images/Broadcast-new.webp" alt="" /></div>
                    <div className="btn-info">
                    <div className="info-box">
                        <h3>Broadcast</h3>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Push out your campaigns and engage with high response WhatsApp messages.</p>
                        </div>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Tag contacts, categorize and target them in groups using personalized communications.</p>
                        </div>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Build and nurture the relationships that generate future sales by engaging with your audiences regularly on WhatsApp.</p>
                        </div>                        
                    </div>
                    <div>
                    <button className="main-button">Broadcast Overview</button>
                    </div>
                    </div>
                </div>

                <div className="benner-cards-box">
                    <div className="img-box" ><img src="/images/Botflow-new.webp" alt="" /></div>
                    <div className="btn-info">
                    <div className="info-box">
                        <h3>Chatbots</h3>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Create no-code chatbots to provide instant responses to common requests.</p>
                        </div>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Simplify mass communication and personalized responses with automated tools.</p>
                        </div>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Boost sales by directly converting more customer communications on WhatsApp.</p>
                        </div>                        
                    </div>
                    <div>
                    <button className="main-button">Chatbots Overview</button>
                    </div>
                    </div>
                </div>

                <div className="benner-cards-box">
                    <div ><img src="/images/Team-Inbox-new.webp" alt="" /></div>
                    <div className="btn-info">
                    <div className="info-box">
                        <h3>Shared Team Inbox</h3>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Share the Wati inbox across your team and provide stellar support on WhatsApp</p>
                        </div>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Use pre-built integrations to bring in customer context in a few clicks.</p>
                        </div>
                        <div style={{display:"flex",alignItems:"flex-start" }}>
                        <img src="public/images/tickk.svg" width={"14px"} style={{margin:"6px 5px 0 0"}} alt="" /><p>Push post sales communications such as order updates, and resolve support requests quickly through WhatsApp.</p>
                        </div>                        
                    </div>
                    <div>
                    <button className="main-button">Team Inbox Overview</button>
                    </div>
                    </div>
                </div>

                

            </div>
            <div className="outside-btn">
                <div><button className="main-button">Free 7 Day Trial</button></div>
                <div><a>or Book a Demo Today</a></div>
                </div>
        </div>
    </div>
  )
}

export default BennerCards