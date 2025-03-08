import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="https://shanuthewebdev.in/" target="_blank" rel="noreferrer">
            Shanu The Web Dev
          </a>{" "}
          {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
