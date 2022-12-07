import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-color">
      <div className="social-media">
        <h3 id="Contact">Contact</h3>
        <ul>
          <li>
            <a href="https://github.com/lucasamaraloliveira" target="_blank">
              {" "}
              Github
            </a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
      <footer>
        <p> Desenvolvido por Lucas Amaral</p>
      </footer>
    </div>
  );
}

export default Footer;
