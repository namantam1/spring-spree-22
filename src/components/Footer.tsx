import { Container } from "./Footer.style";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Container>
        <div className="main-content">
          <div className="left box">
            <div className="content">
              <img
                src="./assets/images/updated_logo.webp"
                alt="spree-logo"
                className="footer-logo"
              />
            </div>
          </div>
          <div className="center box" data-scroll>
            <h2>Links</h2>
            <div className="content-with-underline">
              <div>
                <span className="text">
                  <a href="#">Home</a>
                </span>
              </div>
              <div>
                <span className="text">
                  <a href="#about">About</a>
                </span>
              </div>
              <div>
                <span className="url">
                  <a href="https://www.youtube.com/watch?v=RaSRQDaoARY">
                    Trailer
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="right box" data-scroll id="contact">
            <h2>Let's Connect</h2>
            <div className="content-with-underline">
              <div className="content">
                <div className="place">
                  <span className="fas fa-map-marker-alt" />
                  <span className="text">
                    {" "}
                    <a href="https://nitw.ac.in">
                      National Institute of Technology Campus ,<br />
                      fathimanagar, Telangana 506004
                    </a>
                  </span>
                </div>
                <div className="phone">
                  <span className="fas fa-phone-alt" />
                  <span className="text">
                    <a href="tel:0870 245 9191">0870 245 9191</a>
                  </span>
                </div>
                <div className="page">
                  <span className="fas fa-home" />
                  <span className="text">
                    <a href="https://www.nitw.ac.in">https://www.nitw.ac.in</a>
                  </span>
                </div>
              </div>
              <div className="social">
                <a href="https://www.facebook.com/nitw.springspree">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/springspree_nitw/">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/watch?v=RaSRQDaoARY">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <small>
            Created By Springspree'22 WebDev Team | &copy; 2022 All rights
            reserved
          </small>
        </div>
      </Container>
    </>
  );
}
