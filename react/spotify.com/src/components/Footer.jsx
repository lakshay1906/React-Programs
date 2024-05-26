import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="upper-footer">
          <div className="links">
            <div className="left">
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">For the Record</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <h2>Communities</h2>
              <ul>
                <li>
                  <a href="">For Artist</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  <a href="">Advertising</a>
                </li>
                <li>
                  <a href="">Investors</a>
                </li>
                <li>
                  <a href="">Vendors</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <h2>Usefull Links</h2>
              <ul>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Free Mobile App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="icons">
            <div className="insta">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="twitter">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="facebook">
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="lower-footer">
          <ul>
            <li>
              <a href="">Legal</a>
            </li>
            <li>
              <a href="">Privacy Center</a>
            </li>
            <li>
              <a href="">Privacy Poilcy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">About Ads</a>
            </li>
            <li>
              <a href="">Accessiblity</a>
            </li>
          </ul>
          <div className="copyright">
            <i className="fa-regular fa-copyright"></i> 2024 Spotify AB
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
