import React from "react";
import "./MainContent.css";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import ukIcon from "../../Assets/united-kingdom.png";
import userImg from "../../Assets/Img_Avatar.25.png";
import TopSection from "./TopSection/TopSection";
import Footer from "./Footer/Footer";
function MainContent() {
  return (
    <>
      <section className="Main">
        <nav>
          <ul type="none" className="listType">
            <li>{<BiSearch />}</li>
            <li>
              <img src={ukIcon} width="20" />
            </li>
            <li>{<IoMdNotifications />}</li>
            <li>{<FaUserFriends />}</li>
            <li>
              <img src={userImg} width="20" className="userImage" />
            </li>
          </ul>
        </nav>
      </section>
      <main className="Main">
        <TopSection />
      </main>
      <div className="FooterDiv" style={{position:"relative",top:"-45px",marginLeft:"2rem"}}><Footer/></div>
    </>
  );
}

export default MainContent;
