import { JobItem } from "@/types";

import "./index.scss";

// import required modules
import JobComponent from "./jobItem";

const JobContainer = ({ jobs }: { jobs: JobItem[] }) => {
  return (
    <div className="md:w-9/12 lg:10/12 mx-auto relative pb-20">
      <div className="border-l-2 mt-10 overflow-x-hidden">
        {jobs.map((job) => (
          <JobComponent job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default JobContainer;
