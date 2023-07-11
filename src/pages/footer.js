import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5 className="mt-3">About</h5>
            <p>
              Our news app, based in Lahore, Pakistan, is your one-stop
              destination for the latest news and updates from the local region.
              We are dedicated to providing timely and accurate news coverage,
              ensuring that you stay informed about the happenings around the
              world.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="mt-3 contactH5">Contact</h5>
            <ul className="contact-list">
              <li>Email: globalnews@gmail.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Street, Lahore, Pakistan</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5 className="mt-3">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row d-flex flex-column align-items-center">
            <div className="col-md-6">
              <p className="text-center">
                © 2023 News App. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="footer-links text-center">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
