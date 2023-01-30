import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            className="menu-bar"
            src={bars}
            alt="menu-bar"
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu" ref={menuRef}>
          <li>
            <Link
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="plan"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
