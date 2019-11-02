import React from "react";
import "./footer.css";
import ytfooter from "../../../src/resources/ytfooter.jpg";
import fbfooter from "../../../src/resources/fbfooter.png";

const Footer = () => {
  return (
    <footer className="mainfooter">
      <div className="text-center">
        <div className="follow">
          <h4>FOLLOW US</h4>
          <a
            href="https://www.facebook.com/ieee.tezu"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on FaceBook"
          >
            <img
              src={fbfooter}
              width="25"
              alt="FBpage"
            />
          </a>
          &nbsp;
          <a
            href="https://www.youtube.com/channel/UC2AOTkwhNmrRfTi7M532FJw"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on YouTube"
          >
            <img
              src={ytfooter}
              width="25"
              alt="YOUTUBEpage"
            />
          </a>
        </div>
        <div className="links">
          <h4>IMPORTANT LINKS</h4>

          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="IEEE.org"
          >
            IEEE.org
          </a>
          <br></br>
          <a
            href="https://ieeexplore.ieee.org/Xplore/home.jsp"
            target="_blank"
            rel="noopener noreferrer"
            title="IEEE Explore Digital Library"
          >
            IEEE Explore Digital Library
          </a>
          <br></br>
          <a
            href="https://standards.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="IEEE Standard's Organisation"
          >
            IEEE Standard's Organisation
          </a>
          <br></br>
          <a
            href="https://www.ieee.org/sitemap.html"
            target="_blank"
            rel="noopener noreferrer"
            title="More Sites"
          >
            More Sites
          </a>
          <br></br>
        </div>
        <div className="para">
          <p>&copy;{(new Date().getFullYear())} Tezpur University, Tezpur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
