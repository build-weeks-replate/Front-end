import React from 'react';
import StickyFooter from 'react-sticky-footer';

const Footer = () => {
  return (
    <StickyFooter
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: "#1F5C70",
        bottom: "0",
        width: "100 %",
        height: "50px",
        color: "#FFF",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
        padding: "2rem"
      }}
      stickyStyles={{
        backgroundColor: "#1F5C70",
        bottom: "0",
        width: "100 %",
        height: "50px",
        color: "#FFF",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
        padding: "2rem"
      }}
    >
      &copy; Replate 2019
  </StickyFooter>
  )
}

export default Footer;