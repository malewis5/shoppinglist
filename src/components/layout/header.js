import React from "react";
import "./header.css";

export const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
    </nav>
  );
};
