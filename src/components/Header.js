import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hoverAction, setHoverAciont] = useState(false);
  const [user, setUser] = useState({
    name: "Jademon",
    img: `${process.env.PUBLIC_URL}/404.png`,
  });
  return (
    <div className="header">
      <div className="container">
        <Link to={`/`} className="title col-center">
          MarkdownEditor
        </Link>
      </div>
    </div>
  );
};

export default Header;
