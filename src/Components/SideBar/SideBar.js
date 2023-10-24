import React, { useState } from "react";
import "./SideBar.css";
import TexlaImage from "../../Assets/TexlaLogo.png";
import Dashboard from "../../Assets/ic_dashboard.png";
import Other from "../../Assets/ic_banking.png";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
function SideBar() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="SideBarSection">
      <img src={TexlaImage} width="200" />
      <ul type="none" className="listTypeSideBar">
        <h6 className="sidebarHeading">GENERAL</h6>
        <li className="listItem" tabIndex="0" onClick={handleToggle}>
          <div
            style={{
              flex: "11",
              justifyContent: "start",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Dashboard} />
            Dashboard{" "}
          </div>
          <span style={{ flex: "1", justifyContent: "end" }}>
            {toggle ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </span>
        </li>
        <li className="listItem" tabIndex="0" onClick={handleToggle}>
          <div
            style={{
              flex: "11",
              justifyContent: "start",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <img src={Other} />
            Companies
          </div>{" "}
          <span style={{ flex: "1", justifyContent: "end" }}>
            {toggle ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </span>
        </li>
        <li className="listItem" tabIndex="0" onClick={handleToggle}>
          <div
            style={{
              flex: "11",
              justifyContent: "start",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <img src={Other} />
            Support & Tickets{" "}
          </div>
          <span style={{ flex: "1", justifyContent: "end" }}>
            {toggle ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </span>
        </li>
        <li className="listItem" tabIndex="0" onClick={handleToggle}>
          <div
            style={{
              flex: "11",
              justifyContent: "start",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <img src={Other} />
            User Admins
          </div>{" "}
          <span style={{ flex: "1", justifyContent: "end" }}>
            {toggle ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
