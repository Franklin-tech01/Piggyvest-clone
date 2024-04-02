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
import testimonial from "./assets/fallbackImg.png";
import partner1 from "./assets/brand3.png";
import partner2 from "./assets/brand2.png";
import partner3 from "./assets/brand1.png";
import partner4 from "./assets/pym-removebg-preview.svg";
import partner5 from "./assets/fast.svg";
import partner6 from "./assets/cio.svg";
import Footernav from "./Components/Footernav.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import Logo from "./assets/logo.svg";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// AOS.init();
function App() {
  // State variables to track the visibility of each card
  const [showImage1, setShowImage1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the visibility of each card
      const card1 = document.querySelector(
        ".first__card:nth-child(1)"
      );
      const cardPosition1 =
        card1.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (cardPosition1 < screenHeight * 0.8) {
        setShowImage1(true);
      } else {
        setShowImage1(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
            <img
              src={mainImg}
              alt=""
              className="mainimg"
              data-aos="fade-left"
            />
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
            <div className="third__text--container" data-aos="fade-up"
              data-aos-duration="1500">
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
                  <div
                    className="cardimg"
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                  >
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
                  <div
                    className="cardimg"
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                  >
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
                  <div
                    className="cardimg"
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                  >
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
                  <div
                    className="cardimg"
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                  >
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
                  <div
                    className="cardimg"
                    data-aos="fade-up-left"
                  >
                    <img
                      src={pic5}
                      alt=""
                      data-aos-duration="1500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forth section */}
      <div className="forth__background">
        <h2 data-aos="fade-up"
              data-aos-duration="1500" >Diverse ways to invest</h2>
        <p className="mainp">
          Grow your money and invest for your future
          confindently
        </p>
        <div className="second__card">
          <div className="second__card--text">
            <h3 data-aos="fade-up"
              data-aos-duration="1500">Earn Up to 25% returns</h3>
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
            <div
              className="second__cardimg"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
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

      {/* Testimonials */}

      <div className="testimonial">
        <div
          className="testimonial__img"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <img src={testimonial} alt="" />
        </div>
        <div className="text__session">
          <h2>
            Join 4+ million people who save and invest with
            us
          </h2>
          <div id="apple" className="google">
            <button className="cta" id="btn2">
              {" "}
              <img
                className="icons"
                src={appleLogo}
                id="app"
              />
              Get on iphone
            </button>

            <button className="cta" id="btn1">
              {" "}
              <img className="icons" src={googleLogo} /> Get
              on android
            </button>
          </div>
        </div>
      </div>

      {/* partners */}
      <footer>
        <div className="partners">
          <h2>As Featured in</h2>
          <div className="partner__logo">
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner4} alt="" />
            <img src={partner5} alt="" />
            <img src={partner6} alt="" />
          </div>
        </div>

        {/* navbar */}
        <hr />
        <Footernav />
        <hr />

        <div className="footer__section">
          <div className="logo__area">
            <img src={Logo} alt="" />
          </div>

          <div className="listing">
            <div className="firstList">
              <ul className="mainlist">
                <h3>Products</h3>
                <li>Piggybank</li>
                <li>Invest</li>
                <li>Safelock</li>
                <li>Target Savings</li>
                <li>Flex Naira</li>
                <li>Flex Dollar</li>
              </ul>
            </div>
            <div className="secondlist">
              <ul className="mainlist">
                <h3>Company</h3>
                <li>About</li>
                <li>Faqs</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="thirdlist">
              <ul className="mainlist">
                <h3>Legal</h3>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>

          <div className="address">
            <p>Tesmot house, Abdulraman Okene close,</p>
            <p>Victoria Island, Lagos Nigeria</p>
            <p>contact@Piggyvest.com</p>

            <p>+234 700 933 933 933</p>
          </div>
        </div>

        <div className="last__section">
        <hr />
          <p className="para">
            Piggyvest (formerly piggybank.ng) is the leading
            online savings & investing platform in Nigeria.
            For over 7 years, our customers have saved and
            invested billions of Naira that they would
            normally be tempted to spend.
          </p>
          <p className="paras">
            PV Capital Limited is a fund manager duly
            licensed by the Securities and Exchange
            Commission (SEC) of Nigeria.
          </p>
          <p className="blue">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
        </div>
      </footer>
    </div>
    // </main>
  );
}

export default App;
