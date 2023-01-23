import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <i className="fa-solid fa-users fa-2x"></i>
      <div className="d-flex justify-content-between">
        <h4>School/Admin</h4>
        <i className="fa-solid fa-circle-user fa-2x"></i>
      </div>
    </header>
  );
};

export default Header;
