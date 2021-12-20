import Gplay from './assets/g-play.svg' 
import Logo from './assets/logo.png' 
import Logo_D from './assets/logo_d.png' 
import Screen from './assets/screen.png' 
import UD from './assets/underline.png' 
import Activate from './assets/activate.png' 
import Initiate from './assets/initiate.png' 
import Forget from './assets/forget.gif'
import Sayf from './assets/Svid.gif' 
import Sayf_News from './assets/sayf_news.svg';
import Money from './assets/money.png';
import Dollar from './assets/dollar.png';
import Broke from './assets/broke.svg';
import Calendar from './assets/electricity.svg';
import Icici from './assets/icici.svg';
import Augmont from './assets/augmont.svg';
import Carousel2  from './Carousel'

import React, {useState} from 'react'


function App() {

  const [avgMS, setMS] = useState(5000)
  const [dS, setdS] = useState(100)
  const [l, setl] = useState(30)
  const [rad1, setRad1] = useState(true);
  const [rad2, setRad2] = useState(true);
  const [checked1, setchecked1] = useState(true);
  const [checked2, setchecked2] = useState(true);
  var y;

  function handleChange1(val){
    setMS(val.target.value)
  }
  function handleChange2(val){
    setdS(val.target.value)
  }
  function handleChange3(val){
    setl(val.target.value)
  }

  

  const data5 = 
  
  rad1 && rad2 ? 



  //  ((avgMS / 25) * (Math.pow(1.0075, 12 * l) - 1) ) / (9 / 1200) +
  //  (dS * (Math.pow(1.00025, 365 * l) - 1)) / 0.00025 +
  //   (600 * (Math.pow(1.0075, 12 * l) - 1) / (9 / 1200))
    
    ((avgMS / 25) * (Math.pow(1.0075, 12 * l) - 1) * 1.0075) / (9 / 1200)+
   (dS * (Math.pow(1.00025, 365 * l) - 1)) / 0.00025 +
   (600 * (Math.pow(1.0075, 12 * l) - 1) * 1.0075) /
   (9 / 1200)
    
    
    
    
    : 
   (dS * (Math.pow(1.00025, 365 * l) - 1)) / 0.00025;

   const data4 = data5.toFixed(2)

  return (
   <div>
     <div className="navbar">
       <img src={Logo} alt="logo" />
       <button className="btn-get-started">Get Started</button>
     </div>
     <div className="hero-section ">
       <div className="hero-left">
          <h1>
            Every Spending <br />
            counts. Invest it.
          </h1>
          <p>
          Increase your wealth by up to 50% every 10 years by keeping your money with us.
          </p>
          <div className="btn-download"><span><img src={Gplay} alt="g" /></span><span>Download App</span></div>
       </div>
       <div className="hero-right">
         <img src={Sayf} />
       </div>
     </div>
     <div className="second-section">
       <div className="second-section-left">
          <img src={Screen} alt="" />
       </div>
       <div className="second-section-right">
      
       <div className="second-section-right-inside">
          <img src={Activate} alt="act" />
          <div>
            <h2>Get Ready…</h2>
            <img src={UD} alt="ud" />
            <p>...to begin your investment journey in less than 60 seconds.</p>
          </div>
       </div>
       <div className="second-section-right-inside">
          <img src={Initiate} alt="int"/>
          <div>
            <h2>Set…</h2>
            <img src={UD} alt="ud" />
            <p>..up your account with us instantly. Seamlessly sync it with your existing email ID.</p>
          </div>
       </div>
       <div className="second-section-right-inside">
          <img src={Forget} alt="act" />
          <div>
            <h2>Go...!</h2>
            <img src={UD} alt="ud"/>
            <p>...celebrate your first step to financial success with as little as ₹1.</p>
          </div>
       </div>
       </div>
     </div>
     <div className="third-section">
       <h1>Build your FUTURE with SayF <br /> Try it for Yourself!</h1>
       <div className="cards">
         <div className="card">
           <div className="card-content">
             <img className="broke" src={Broke} alt="broke" />
             <h3>Exclusive Stores</h3>
             <p>Shop with 150+exclusive brands and get guaranteed investment <br />back on every successful purchase.
            </p>
           </div>
           <div className="card-content">
             <img src={Calendar} alt="calendar" />
             <h3>Spending Optimisation
            </h3>
             <p>Make the most out of your hard-earned<br /> money by smart spending and leaving<br />the guesswork out of the equation.
            </p>
           </div>
         </div>
         <div className="card">
           <div className="calculator">
             <p>Average Monthly Spending</p>
             <p><b>₹{avgMS}</b></p>
             <input className="range" type="range" min='5000' max='100000'  onChange={handleChange1}/>
             <div className="ranges">
             <p>₹5000</p>
             <p>₹100000+</p>
             </div>
             <p>Daily Savings</p>
             <p><b>₹{dS}</b></p>
             <input className="range" type="range" min='0' max='1000'  onChange={handleChange2}/>
             <div className="ranges">
             <p>₹0</p>
             <p>₹1000</p>
             </div>
             <p>Length</p>
             <p><b>{l} {l==1? y = "year" : y="years"}</b></p>
             <input className="range" type="range" min='1' max='30'  onChange={handleChange3}/>
             <div className="ranges">
             <p>1 year</p>
             <p>30 years</p>
             </div>
             <div className="checkboxes">
               <pre>Roundup your spare change</pre>
               <input checked={checked1} type="checkbox" onChange={(e)=> {setRad1(e.target.checked); setchecked1(!checked1)}}/>
             </div>
             <div className="checkboxes">
               <pre>Partner store savings</pre>
               <input checked={checked2} type="checkbox" onChange={(e)=> {setRad2(e.target.checked); setchecked2(!checked2)}}/>
              </div>
             <div className="calculator-bottom">
               <p>Your total value</p>
               <h2>₹ {data4}</h2>
             </div>
           </div>
         </div>
         <div className="card">
         <div className="card-content">
           <img src={Money} alt="" />
           <h3>Auto-purchase</h3>
             <p>Not able to prioritize investing as a habit?<br />Let us know how much and how frequently<br />you would like to save, and we will handle the rest!
            </p>
           </div>
           <div className="card-content">
             <img src={Dollar} alt="" />
             <h3>Roundups</h3>
             <p>With automated Roundups and recurring investments, <br />you just set it and forget it. <br />Your money is automatically placed in one of our <br />whole rupee and automatically <br />expert-built, diversified investment portfolios.</p>
           </div>
         </div>
       </div>
     </div>
     <div className="fourth-section">
        <h1>Earn and invest every time you make your favorite purchase. Sounds like a dream? Think again!</h1>
        <h3>Shop from stores within the app and earn guaranteed cashback that is automatically invested into your portfolio.</h3>
        <div className="carousel">
          <Carousel2/>
        </div>
     </div>
     <div className="partners-section">
         <h2>Our trusted partners</h2>
         <div className="partner-images">
          <img src={Icici} alt="icici" />
          <img src={Augmont} alt="augmont" />
         </div>
         <p>We make certain that the gold corresponding to each purchase you make is housed in world-class vaults and is safeguarded by a SEBI-regulated independent trustee, ensuring that you receive guaranteed 24K gold. </p>
     </div>

     {/* <div className="investor-cards">
       <div className="icard">
         <img src={Augmont} alt="wow" />
         <h3>100% Purity guaranteed</h3>
         <p>With our partners, you buy directly from the manufacturer which assures safety.</p>
       </div>
       <div className="icard">
         <img src={Augmont} alt="wow" />
         <h3>100% Purity guaranteed</h3>
         <p>With our partners, you buy directly from the manufacturer which assures safety.</p>
       </div>
       <div className="icard">
         <img src={Augmont} alt="wow" />
         <h3>100% Purity guaranteed</h3>
         <p>With our partners, you buy directly from the manufacturer which assures safety.</p>
       </div>
     </div> */}
     < div className="fifth-section">
       <div className="left">
         <h1>Never miss an update</h1>
          <p>Sign up for our monthly newsletter<br />for financial tips and exclusive updates.<br /> Your details are safe with us 😃</p>
          <div className="text-field">
            <input type="text" />
            <button className="btn-subscribe">Subscribe</button>
          </div>

       </div>
        <div className="right">
          <img src={Sayf_News} alt="" />
        </div>
     </div>
     <div className="footer">
           <div className="f1">
              <img src={Logo_D} alt="" />
              <h2>Location: <br /> Bangalore, India</h2>
              <h1><u>support@sayf.in</u></h1>
           </div>
           <div className="f2">
             <h2>Information</h2>
             <p>Why SayF?</p>
             <p>About Us</p>
             <p>Partners</p>
           </div>
           <div className="f3">
             <h2>Legal</h2>
             <p>Privacy Policy</p>
            <a href="#/terms"> <p>Terms & Conditions</p></a>
           </div>
           <div className="f4">
             <h2>Support</h2>
             <p>Get Started</p>
             <p>Calculator</p>
             <p>FAQ</p>
            </div>
           </div>
       <div className="bottom"></div>
     </div>
  );
}

export default App;
