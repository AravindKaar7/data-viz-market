import React, { useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import { CiShare1 } from "react-icons/ci";
import "./pipilines.css";
import data from "../Components/sample/dummy";
import { useNavigate, useParams } from "react-router-dom";
import axios, * as others from "axios";
import CsvDownloadButton from "react-json-to-csv";
import exportFromJSON from "export-from-json";

function Pipelines() {
  const [results, setResults] = useState(null);
  const [input, setInput] = useState("");
  const [mockdata, setMockdata] = useState();

  const navigate = useNavigate();
  const prams = useParams();
  // console.log(prams.id);
  const details = data.filter((data, index) => {
    return data.name === prams.id;
  });
  // console.log(details);

  const onDownload = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    let res = {
      data: {
        file: [],
      },
    };
    res = await axios.get(
      `http://127.0.0.1:5000/api/covid/updateTableLocal?table=${prams.id}`,
      myHeaders
    );
    //console.log(JSON.parse(res.data.file))
    let s = {
      data: [],
    };
    //s = res.data.file
    let s1 = JSON.parse(res.data.file);
    console.log(s);
    //let s1= s.data
    // setMockdata(JSON.parse(s))
    console.log(s1);
    const fileName = prams.id;
    const exportType = "csv";
    window.exportFromJSON({ data: s1, fileName, exportType });

    // fetch(`http://127.0.0.1:5000/api/covid/updateTableLocal?table=hospitalizations`,{
    //   method: 'GET',
    // headers:myHeaders}
    // ).then(r => r.json()).then(result => {
    //   setResults(result);
    //   console.log(result)
    // })
  };

  return (
    <MainPageLayout>
      <div className="flex h-[525px] py-2 px-4">
        <div className="flex-[0.3] border-[2px] border-gray-200 shadow-lg rounded-[10px] bg-[#ffffff] py-2">
          <div className="w-[350px] h-[490px] ml-[21px] flex flex-col items-center">
            <img
              className=" h-[100px] w-[100px] rounded-full mt-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5ayAoSMvAje9joguQXumOYu-Phr6Mq3nF4W7Bc1i7eNk8_ypiyV-NrWJYdbm1oXjJL0&usqp=CAU"
              alt="logo"
            />
            <h1 className="text-[25px] text-zinc-900 mt-8">{prams.id}</h1>
            <h6 className="mt-2 text-blue-400 text-xs">
              <a href="">Kaar Inc</a>
            </h6>
            <a
              class="mt-8 text-center relative px-5 py-3  font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              onClick={(e) => {
                e.preventDefault();
                onDownload();
              }}
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Download
              </span>
            </a>
            <p className="mt-4 text-xs text-zinc-900">
              CSV file for a this {prams.id} data source here
            </p>
            <div className="mt-[460px] w-[330px] fixed flex justify-end">
              <a
                href="https://www.who.int/health-topics/vaccines-and-immunization"
                className="w-[25px] h-[25px] "
              >
                <CiShare1 className=" w-[25px] h-[25px]" color="black" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-[0.7] ml-4 overflow-auto scrollbar rounded-[10px] ">
          <div className="flex flex-col">
            <div className="h-[400px] border-[1px]  border-gray-200 bg-[#ffffff] rounded-[10px] text-left  ">
              <div className="border-b-[1px] border-gray-200 py-2">
                <h2 className=" text-2xl ml-6 text-zinc-900">Data View</h2>
              </div>
            </div>
            <div className="h-[400px] border-[1px] mt-4  border-gray-200 bg-[#ffffff] rounded-[10px] text-left  ">
              <div className="border-b-[1px] border-gray-200] py-2">
                <h2 className=" text-2xl ml-5 text-zinc-900">Description</h2>
              </div>
            </div>
            <div className="h-[400px] border-[1px] mt-4  border-gray-200 bg-[#ffffff] rounded-[10px] text-left  ">
              <div className="border-b-[1px] border-gray-200 py-2">
                <h2 className=" text-2xl ml-5 text-zinc-900">
                  Ratings and Reviews
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
}

export default Pipelines;
