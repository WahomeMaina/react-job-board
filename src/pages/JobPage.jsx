import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob, updateJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const onDeleteJob = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this listing?");
    if (!confirm) {
      return;
    }
    deleteJob(id);
    toast.success("Job deleted successfully!");
    navigate("/jobs");
    return;
  };
  console.log(job);
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link to="/jobs" className="text-emerald-500 hover:text-emerald-600 flex items-center">
            <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
                <div className="text-sm text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-sm text-orange-700 mr-2"></i>
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-emerald-800 text-md font-bold mb-6">Job Description</h3>

                <p className="mb-4 text-sm">{job.description}</p>

                <h3 className="text-emerald-800 text-md font-bold mb-2">Salary</h3>

                <p className="mb-4">${job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-l font-bold mb-6">Company Info</h3>

                <h2 className="text-lg text-emerald-800">{job.company.name}</h2>

                <p className="my-2 text-sm">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-sm">Contact Email:</h3>

                <p
                  className="my-2 bg-gray-200 p-2 text-[12px] overflow-clip"
                  data-tooltip-id="#1"
                  data-tooltip-content={job.company.contactEmail}
                  data-tooltip-place="top"
                  data-tooltip-delay-show={1000}
                >
                  {job.company.contactEmail}
                </p>
                <Tooltip id="#1" />

                <h3 className="text-sm">Contact Phone:</h3>

                <p className="my-2 bg-gray-200 p-2 text-[12px]">{job.company.contactPhone}</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-blue-500 hover:bg-emerald-600 text-white text-center py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>

                <button
                  onClick={() => onDeleteJob(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

export { JobPage as default, jobLoader };
