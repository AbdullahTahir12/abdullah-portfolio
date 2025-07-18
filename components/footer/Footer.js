import React from "react";
import { Link } from "react-scroll";
import CtaSection from "../ctaSection/ctaSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <CtaSection />
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className="site-logo" to="/">
                    <img src="images/logo.png" alt="" />
                    Abdullah
                  </Link>
                </div>
                <p>
                  Welcome and open yourself to your truest love this year with
                  us! With the Release Process
                </p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/share/1ES1VxA7dR/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            e.currentTarget.href,
                            "fbShareWindow",
                            "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=400"
                          );
                        }}
                      >
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/abdullah-tahir-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile (opens in a new tab)"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@aj1762919"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medium profile"
                      >
                        <FontAwesomeIcon icon={faMedium} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Navigation</h3>
                </div>
                <ul>
                  <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  {/* <li><Link to="blog" spy={true} smooth={true}  duration={500}>Recent Post</Link></li> */}
                </ul>
              </div>
            </div>
            {/* <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>All Services</h3>
                                </div>
                                <ul>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Web Design</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Web Development</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Brand Identity</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Digital Marketing</Link></li>
                                </ul>
                            </div>
                        </div> */}
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  Must explain to you how all this mistaken idea pleasure born
                  and give you a complete account.
                </p>
                <form onSubmit={SubmitHandler}>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit">
                      <i className="ti-email"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shape">
          <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
            <g filter="url(#filter0_f_39_3833)">
              <circle
                cx="803"
                cy="803"
                r="303"
                fill="#59C378"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_39_3833"
                x="0"
                y="0"
                width="1606"
                height="1606"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_3832"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <p className="copyright">
              Copyright &copy; 2022 Elito. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
