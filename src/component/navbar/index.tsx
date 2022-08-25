import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { IoIosHome } from "react-icons/io";
import { BiUser , BiTable} from "react-icons/bi";

export function Index() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" className="link">
              <IoIosHome/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/form"  className="link">
              <BiUser/>
              Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/table"  className="link">
              <BiTable/>
              Table
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Index;
