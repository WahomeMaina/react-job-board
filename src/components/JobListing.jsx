import { useState } from "react";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  let desc = job.description;
  if (desc.length > 90 && !showFullDesc) {
    desc = desc.substring(0, 90) + "...";
    // setShowFullDesc(true);
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold  h-8">{job.title}</h3>
        </div>

        <div className="mb-5 text-sm">
          {desc}
          {desc.length > 90 && (
            <button
              onClick={() => {
                setShowFullDesc(!showFullDesc);
              }}
              className="text-emerald-700 hover:text-emerald-700 border-none outline-none inline"
            >
              {showFullDesc ? "less" : "more"}
            </button>
          )}
        </div>

        <h3 className="text-emerald-700 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-red-700  mb-3 text-sm">
            <i className="fa-solid fa-location-dot text-sm mr-2"></i>
            {job.location}
          </div>
          <Link
            to={`/job/${job.id}`}
            className="min-w-3 h-[36px] bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            More Info.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
