import React from "react";

const Nav = ({navbarContent}) => {
  return (
    <>
      <nav className="navbar navbar-light fixed-top bg-light">
        <a className="navbar-brand" href="/">
          {/* <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/> */}
          {navbarContent}
        </a>
      </nav>
    </>
  );
};

export default Nav;
