import "./cards.css"

const Card_brands = () => {
  return (
    <div>
        <div className="card-container ">
            <div>
                <h1>Real Results. Real Stories!</h1>
                <h3>Discover how brands thrive with Wati</h3>    
            </div>
            <div className="card-box">
                <div className="cards">
                    <div><img src="/images/cards/Habuildd-new.webp" alt="" /></div>
                    <p>From 200 to 80,000+ Subscribers: How Wati Empowered Habuild's Remarkable Growth</p>
                </div>
               
                <div className="cards">
                    <div><img src="/images/cards/Vedantu-new.webp" alt="" /></div>
                    <p>Vedantu's Triumph with Wati: 50% Drop in Contact Center Calls</p>
                </div>
                <div className="cards">
                    <div><img src="/images/cards/invesai-new.webp" alt="" /></div>
                    <p>InvestAI got 30x more responses than traditional emails using Wati</p>
                </div>
                <div className="cards"> 
                    <div><img src="/images/cards/zellbury-new.webp" alt="" /></div>
                    <p>Wati helped Zellbury achieve an impressive 87% customer satisfaction rate on support!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card_brands




