import React, { useState, useEffect } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import PipelineCard from "../Components/Card/PipelineCard";

import "./Home.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import data from "../Components/sample/dummy";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(data);
  const [value, setvalue] = useState(0);
  const [newData, setNewData] = useState(data);

  function onInputChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  function onKeyDown(ev) {
    if (ev.keyCode === 13) {
      onSearch();
    }
  }

  function onSearch() {
    setResults(results);
    console.log(results);
  }
  useEffect(() => {
    let new_data = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase()) === true;
    });
    console.log(new_data);
    setNewData(new_data);
  }, [input]);

  return (
    <MainPageLayout>
      <div className="searchContainer">
        <div className="searchDiv">
          <div className="inputDiv">
            <input
              className="inputClass"
              placeholder="Search"
              value={input}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
          </div>

          <div className="lineDiv"> </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-search searchSvg"
            viewBox="0 0 16 16"
            id="IconChangeColor"
            onKeyDown={onKeyDown}
          >
            {" "}
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              id="mainIconPathAttribute"
              fill="#737373"
            ></path>{" "}
          </svg>
        </div>
      </div>

      {/* {renderResults()} */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} aria-label="basic tabs example">
            <Tab label="All Data" />
            <Tab label="By Section" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-4 gap-16 p-[70px]">
            {newData.map((detail, index) => (
              <PipelineCard
                id={index}
                name={detail.name}
                image={detail.imgUrl}
                summary={detail.summary}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          have to change
        </TabPanel>
      </Box>
    </MainPageLayout>
  );
}

export default Home;
