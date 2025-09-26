import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;