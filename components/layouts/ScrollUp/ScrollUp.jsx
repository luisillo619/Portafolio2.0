import React from "react";

const ScrollUp = ({ children }) => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={scrollUp}>{children}</button>
    </>
  );
};

export default ScrollUp;
