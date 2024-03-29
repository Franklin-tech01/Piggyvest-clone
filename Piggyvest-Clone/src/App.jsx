import Navbar from "./Components/Navbar/index.jsx";
import googleLogo from "./assets/google_icon.svg";
import appleLogo from "./assets/white_Apple_Logo.svg";
import mainImg from "./assets/Main.avif";
import card2 from "./assets/card2 (1).avif";
import card4 from "./assets/card4 (1).avif";
import frame2 from "./assets/frame2 (1).avif";
import frame3 from "./assets/Frame3 (1).avif";
import frame5 from "./assets/Frame5 (1).avif";
import security from "./assets/securitylock.svg";
import arrow from "./assets/download (6).svg";
import pic1 from "./assets/iPhone 14-11.avif";
import pic2 from "./assets/iPhone 14 - 22.avif";
import pic3 from "./assets/iphonw.avif";
import pic4 from "./assets/iPhone 14.avif";
import pic5 from "./assets/iphone12.avif";
import pic6 from "./assets/iphoneInvest.avif";
import vid from "./assets/Piggyvest Saver Of The Month.mp4";
import "./App.css";
import React, { useState, useEffect } from 'react';


function App() {


  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.querySelector('.first__card');
      const cardPosition = card.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (cardPosition < screenHeight * 0.8) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <main>
    <div className="main__container">
      <Navbar />
      <div className="container">
        <div className="hero">
          <div className="text__content">
            <h2 className="header">
              The Better Way to Save & Invest
            </h2>
            <p>
              Piggyvest over 4 million customers achieve
              thier financial goals by helpng them save and
              invest with ease
            </p>
            <div id="apple">
              <button className="cta" id="btn2">
                {" "}
                <img
                  className="icons"
                  src={appleLogo}
                  id="app"
                />
                Get on iphone
              </button>

              <button className="cta">
                {" "}
                <img
                  className="icons"
                  src={googleLogo}
                />{" "}
                Get on android
              </button>
            </div>
          </div>
          <div className="image__content">
            <img src={mainImg} alt="" className="mainimg" />
            <div className="fallback__container">
              <div className="fallbacks">
                <img src={card2} id="down" alt="" />
                <img src={frame3} className="big" alt="" />
              </div>
              <div className="fallback">
                <img src={frame2} className="big" alt="" />
                <img src={card4} alt="" />
              </div>
            </div>
            <div className="lastman">
              <img src={frame5} alt="" />
            </div>
          </div>
        </div>

        {/* second phase */}
        <div className="second__container">
          <div className="logo__container">
            <img src={security} alt="" />
          </div>
          <div className="second__text--container">
            <h2>Your security is our priority</h2>
            <p>
              PiggyVest uses the highest level of Internet
              Security and it is secured by 256 bits SSL
              security encryption to ensure that your
              information is completely protected from fraud
            </p>
            <div>
              <img src={arrow} className="arrow" alt="" />
              <span className="arrowtext">
                More on our security measures
              </span>
            </div>
          </div>
        </div>

        {/* Third phase */}
        <div className="thirdmain">
          <div className="third__container">
            <div className="third__text--container">
              <h2>5 ways to build your savings</h2>
              <p>
                Earn 5%-15% when you save with any of these
                PiggyVest Plans.
              </p>
            </div>
            <div className="first__card">
              <div className="card__text">
                <h3>Automated Savings</h3>
                <p>
                  Build a dedicated savings faster on your
                  terms , automatically or manually.
                </p>
                <div className="image__section">
                  <div className="space">
                    <img
                      className="test"
                      src={arrow}
                      alt=""
                    />
                    <span>Piggybank</span>
                  </div>
                  <div className={`cardimg ${showImage ? 'show' : ''}`}>
                    <img src={pic1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third__container">
            <div className="first__card">
              <div className="card__text">
                <h3 id="fixed">Fixed Savings</h3>
                <p>
                  Lock money away for a fixed duration
                  without having access to it until
                  maturity. it's like having a custom fixed
                  deposit.
                </p>
                <div className="image__section">
                  <div className="space">
                    <img
                      className="test"
                      src={arrow}
                      alt=""
                    />
                    <span id="fixed">Safelock</span>
                  </div>
                  <div  className={`cardimg ${showImage ? 'show' : ''}`}>
                    <img src={pic2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="first__card">
              <div className="card__text">
                <h3 id="goal">Goal-oriented savings</h3>
                <p>
                  Reach all your savings goals faster. save
                  towards multiple goals on your own or with
                  a group
                </p>
                <div className="image__section">
                  <div className="space">
                    <img
                      className="test"
                      src={arrow}
                      alt=""
                    />
                    <span id="goal">Target Savings</span>
                  </div>
                  <div  className={`cardimg ${showImage ? 'show' : ''}`}>
                    <img src={pic3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third__container">
            <div className="first__card">
              <div className="card__text">
                <h3 id="naira">Flex naira</h3>
                <p>
                  Save,Transefer, manage, organise and
                  withdray your money at any time
                </p>
                <div className="image__section">
                  <div className="space">
                    <img
                      className="test"
                      src={arrow}
                      alt=""
                    />
                    <span id="naira">Flex Naira</span>
                  </div>
                  <div  className={`cardimg ${showImage ? 'show' : ''}`}>
                    <img src={pic4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="first__card">
              <div className="card__text">
                <h3 id="dollar">Flex Dollar</h3>
                <p>
                  Save and grow your money in foreign
                  currencies such as Dollars
                </p>
                <div className="image__section">
                  <div className="space">
                    <img
                      className="test"
                      src={arrow}
                      alt=""
                    />
                    <span id="dollar">Flex Dollar</span>
                  </div>
                  <div className={`cardimg ${showImage ? 'show' : ''}`}>
                    <img src={pic5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forth section */}
      <div className="forth__background">
        <h2>Diverse ways to invest</h2>
        <p className="mainp">
          Grow your money and invest for your future
          confindently
        </p>
        <div className="second__card">
          <div className="second__card--text">
            <h3>Earn Up to 25% returns</h3>
            <p>
              Invest securely and confindently on the go.
              Grow your money confindentlyby investing in
              pre- <br /> vetted investment opurtunities.ZZ
            </p>
            <div className="spaces">
              <img className="test" src={arrow} alt="" />
              <span className="learn">
                Learn about investments
              </span>
            </div>
          </div>
          <div className="image__section">
            <div className="second__cardimg">
              <img src={pic6} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* saver of the month */}

      <div className="saver__section">
        <h2>Meet our saver of the month</h2>
        <p>
          Every month, we shine a spotlight on one saver,
          asking them about thier savings culture and how
          Piggyvest has helped them.
        </p>
        <div className="vidcon">
          <video loop src={vid} controls></video>
        </div>
      </div>



    </div>
    // </main>
  );
}

export default App;
