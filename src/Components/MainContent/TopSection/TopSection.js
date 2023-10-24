import React from "react";
import "./TopSection.css";
function TopSection() {
  return (
    <div style={{ position: "relative", top: "-48px" }}>
      <h5 className="MainHeader">Client Management</h5>
      <div className="subHeader">
        <h6 className="custom-underline" tabIndex="0">
          Dashboard
        </h6>
        <h6 className="custom-underline" tabIndex="0">
          {" "}
          Client Details
        </h6>
      </div>
      <div className="MainDiv">
        <div>
          <h5 className="cardHeader">Key Performance Indicator</h5>
          <div className="cardDiv1">
            <div className="subDiv">
              <div
                style={{
                  width: "4px",
                  height: "100%",
                  backgroundColor: "rgba(9, 26, 122, 1)",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Client Retention Rate </div>
                <div
                  style={{
                    color: "rgba(9, 26, 122, 1)",
                    fontFamily: " Public Sans",
                    fontSize: "26px",
                    fontWeight: "600",
                    lineHeight: "31px",
                    textAlign: "left",
                  }}
                >
                  55%
                </div>
              </div>
            </div>
            <div className="subDiv">
              <div
                style={{
                  width: "4px",
                  height: "100%",
                  backgroundColor: "rgba(0, 108, 156, 1)",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Client Satisfaction </div>
                <div
                  style={{
                    color: "rgba(0, 108, 156, 1)",
                    fontFamily: " Public Sans",
                    fontSize: "26px",
                    fontWeight: "600",
                    lineHeight: "31px",
                    textAlign: "left",
                  }}
                >
                  55%
                </div>
              </div>
            </div>
            <div className="subDiv">
              <div
                style={{
                  width: "4px",
                  height: "100%",
                  backgroundColor: " rgba(0, 97, 36, 1)",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Revenue Generated </div>
                <div
                  style={{
                    color: "rgba(0, 97, 36, 1)",
                    fontFamily: " Public Sans",
                    fontSize: "26px",
                    fontWeight: "600",
                    lineHeight: "31px",
                    textAlign: "left",
                  }}
                >
                  55%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="cardHeader">Companies Status</h5>
          <div className="cardDiv2">
            <div className="subDiv">
              {" "}
              <div
                style={{
                  width: "4px",
                  height: "100%",
                  backgroundColor: "rgba(9, 26, 122, 1)",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Total </div>
                <div
                  style={{
                    color: "rgba(9, 26, 122, 1)",
                    fontFamily: " Public Sans",
                    fontSize: "26px",
                    fontWeight: "600",
                    lineHeight: "31px",
                    textAlign: "left",
                  }}
                >
                  20
                </div>
              </div>
            </div>
            <div className="subDiv">
              {" "}
              <div
                style={{
                  width: "4px",
                  height: "100%",
                  backgroundColor: "rgba(0, 97, 36, 1)",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Active </div>
                <div
                  style={{
                    color: "rgba(0, 97, 36, 1)",
                    fontFamily: " Public Sans",
                    fontSize: "26px",
                    fontWeight: "600",
                    lineHeight: "31px",
                    textAlign: "left",
                  }}
                >
                  15
                </div>
              </div>
            </div>
            <div className="subDiv">
              <div
                style={{
                  width: "4px",
                  height: "100%",
                  backgroundColor: "rgba(0, 108, 156, 1)",
                }}
              ></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>New </div>
                <div
                  style={{
                    color: "rgba(0, 108, 156, 1)",
                    fontFamily: " Public Sans",
                    fontSize: "26px",
                    fontWeight: "600",
                    lineHeight: "31px",
                    textAlign: "left",
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="cardHeader">Active User Base</h5>
          <div className="cardDiv3">
            <div className="subDiv">
              {" "}
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                {" "}
                <div>
                  <div
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "rgba(25, 57, 183, 1)",
                      height: "20px",
                      width: "20px",
                    }}
                  ></div>
                </div>
                <p className="cardPara"> 89% App User</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div>
                  <div
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "rgba(54, 179, 126, 1)",
                      height: "20px",
                      width: "20px",
                    }}
                  ></div>
                </div>
                <p className="cardPara">11% Web User</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <div
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(25, 57, 183, 1)",
                  height: "20px",
                  width: "210px",
                }}
              ></div>

              <div
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(54, 179, 126, 1)",
                  height: "20px",
                  width: "38px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
