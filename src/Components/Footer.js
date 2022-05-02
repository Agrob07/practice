import React from "react";

const Footer = () => {
  const year = new Date().getUTCFullYear();

  
  return (
    <footer>
      <p>
        CopyRigh 
      </p>

      <span>{year}</span>
    </footer>
  );
};

export default Footer;
