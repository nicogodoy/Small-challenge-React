import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { IoIosHome } from "react-icons/io";
import { BiUser , BiTable} from "react-icons/bi";

export function Index() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="link">
              <IoIosHome/>
              Home
            </Link>
          </li>
          <li>
            <Link to="/form" className="link">
              <BiUser/>
              Form
            </Link>
          </li>
          <li>
            <Link to="/table" className="link">
              <BiTable/>
              Table
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Index;
