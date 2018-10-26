import React from "react";

import "./Footer.css";

const Footer = props => (
  <footer className="pagebottom">
    <div className="bottom-center">
      <a href="http://MCPolichette.github.io">
        <div className="bottom-name">Mark Polichette</div>
      </a>
      <div className="bottom-nav">
        <a href="http://github.com/MCPolichette">
          <i id="social-git" className="fab fa-github-square fa-3x social" />
        </a>
        <a href="https://www.linkedin.com/in/mark-polichette/">
          <i id="social-linked" className="fab fa-linkedin fa-3x social" />
        </a>
        <a href="mailto:Mark@Polichette.com">
          <i id="social-email" className="fa fa-envelope-square fa-3x social" />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
