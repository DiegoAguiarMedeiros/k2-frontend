import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Input, Button, Icon } from "@ui5/webcomponents-react";

interface HeaderProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    console.log("event.target.value", event.target.value);
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("inputValue", inputValue);
    setSearchQuery(inputValue);
  };

  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" height="40" />
        </Link>
      </div>
      <div className="header-center">
        <Input
          className="search-input"
          type="Text"
          placeholder="Filme"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Icon className="search-icon" design="Neutral" name="employee" />
        <Button className="search-button" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
      <div className="header-right"></div>
    </header>
  );
};

export default Header;
