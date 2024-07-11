// shortcuts to auto generate include rfc, rafc, rafce
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // add new job
  const addJob = async (job) => {
    const response = await fetch("/api/jobs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    console.log(response);
    return;
  };

  // delete job
  const deleteJob = async (jobId) => {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });
    console.log(response);
    return;
  };

  // update job
  const updateJob = async (updatedJob) => {
    const response = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });
    console.log(response);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob} updateJob={updateJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
