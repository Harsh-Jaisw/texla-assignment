import React from "react";
import "./Footer.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Chart from "../../../Atoms/Chart";
import { GoDotFill } from "react-icons/go";
function Footer() {
  const columns = [
    {
      field: "Companyname",
      headerName: "Company Name",
      width: 150,
      editable: true,
    },
    {
      field: "Onboardingdate",
      headerName: "Onboarding Date",
      width: 150,
      editable: true,
    },
    {
      field: "GoLivedate",
      headerName: "Go-Live Date",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Totaluserbase",
      headerName: "Total User Base",
    },
    { field: "Lastbilling", headerName: "Last Billing", width: 90 },
    { field: "Status", headerName: "Status", width: 90 },
  ];

  const rows = [
    {
      Companyname: "Texla Culture",
      id: 1,
      Onboardingdate: "12 jan 2022",
      GoLivedate: "07 aug 2022",
      Totaluserbase: "244",
      Lastbilling: "07 Aug 2022",
      firstName: "Jon",
      age: 35,
      Status: "Active",
    },
    {
      Companyname: "Texla Culture",
      id: 2,
      Onboardingdate: "11 feb 2022",
      GoLivedate: "05 May 2022",
      Totaluserbase: "1000",
      Lastbilling: "07 Aug 2022",
      age: 42,
      Status: "Active",
    },
    {
      Companyname: "Texla Culture",
      id: 3,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: "Jaime",
      Lastbilling: "07 Aug 2022",
      Totaluserbase: "150",
      age: 45,
      Status: "Draft",
    },
    {
      Companyname: "Texla Culture",
      id: 4,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: "Arya",
      Lastbilling: "07 Aug 2022",
      Totaluserbase: "150",
      age: 16,
      Status: "Draft",
    },
    {
      Companyname: "Texla Culture",
      id: 5,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: "Daenerys",
      Lastbilling: "07 Aug 2022",
      Totaluserbase: "150",
      age: null,
      Status: "Draft",
    },
    {
      Companyname: "Texla Culture",
      Lastbilling: "07 Aug 2022",
      id: 6,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: null,
      Totaluserbase: "150",
      age: 150,
      Status: "Draft",
    },
    {
      Companyname: "Texla Culture",
      Lastbilling: "07 Aug 2022",
      id: 7,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: "Ferrara",
      Totaluserbase: "150",
      age: 44,
      Status: "Draft",
    },
    {
      Companyname: "Texla Culture",
      Lastbilling: "07 Aug 2022",
      id: 8,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: "Rossini",
      Totaluserbase: "150",
      age: 36,
      Status: "Draft",
    },
    {
      Companyname: "Texla Culture",
      Lastbilling: "07 Aug 2022",
      id: 9,
      Onboardingdate: "10 sep 2022",
      GoLivedate: "06 Oct 2022",
      firstName: "Harvey",
      Totaluserbase: "150",
      age: 65,
      Status: "Draft",
    },
  ];
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Box sx={{ height: 300, width: "100%",position:"relative" }}>
        <h5 className="subHeading" style={{marginBottom:"3rem"}}>Onboarded Companies</h5>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[9]}
          disableRowSelectionOnClick
          showCellVerticalBorder={false}
          showColumnVerticalBorder={false}
        />
      </Box>
      <div>
        <h5 className="subHeading">Regional Matrics</h5>
        <div style={{display:"flex",gap:"10px",justifyContent:"space-around",alignItems:"center",position:"relative",bottom:"-40px"}}>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"start"}}>
            East{" "}
            <span style={{color:"yellow",fontSize:"20px"}}>
              {" "}
              <GoDotFill />
            </span>{" "}
          </div>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"start"}}> 
            South{" "}
            <span style={{color:"orange",fontSize:"20px"}}>
              <GoDotFill />
            </span>
          </div>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"start"}}>
            North
            <span style={{color:"green",fontSize:"20px"}}>
              <GoDotFill />
            </span>
          </div>{" "}
          <div style={{display:"flex",gap:"10px",justifyContent:"center",alignItems:"start"}}>
            West
            <span style={{color:"blue",fontSize:"20px"}}>
              <GoDotFill />
            </span>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default Footer;
