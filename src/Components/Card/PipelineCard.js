import React from "react";
import { Link, useNavigate } from "react-router-dom";
import IMAGE_NOT_FOUND from "../../images/not-found.png";
function PipelineCard({ id, image, name, summary }) {
  const navigate = useNavigate();

  return (
    // <div>
    // <div className="img-wrapper">
    //   <img src={image} alt="show" />
    // </div>

    // <h1>{name}</h1>

    // <p>{summary}</p>

    // <div className="btns">
    //   <Link to={`/show/${id}`}>(Read more)</Link>
    //   <button type="button">Star me</button>
    // </div>
    // </div>
    //

    <Link to={`/pipelines/${name}`}>
      <div
        class="h-[200px] bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-blue-300 hover:scale-[0.97]"
        onClick={() => {
          navigate("/Pipelines");
        }}
      >
        {/* <a class="font-medium capitalize text-lg" href="">
          Data sources
        </a> */}

        <span class="flex items-center text-gray-500">
          <span class="bg-white-400 rounded-full w-3 h-3 ml-1.5"></span>
        </span>

        <p class="text-gray-500 text-[15px] font-[Aquatico]">{name}</p>

        <div class="flex items-center mt-8">
          <img
            src={image}
            alt="Alex Doe"
            class="rounded-full w-9 h-9 object-cover"
          />

          <span class="text-gray-500 ml-4">
            {new Date().toLocaleDateString()}
          </span>

          {/* <span class="text-gray-500 font-medium text-right lg:bg-red-400 lg:text-white lg:rounded-full lg:w-5 lg:h-5 xl:w-auto xl:h-auto lg:flex lg:justify-center lg:items-center lg:text-xs xl:text-gray-500 xl:bg-transparent xl:text-base ml-auto xl:inline-block">
            {id} <span class="inline lg:hidden xl:inline">Pipeline</span>
          </span> */}
        </div>
      </div>
    </Link>
  );
}

export default PipelineCard;
