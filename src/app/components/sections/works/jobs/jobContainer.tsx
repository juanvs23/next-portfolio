import { JobItem } from "@/types";

import "./index.scss";

// import required modules
import JobComponent from "./jobItem";

const JobContainer = ({ jobs }: { jobs: JobItem[] }) => {
  return (
    <div className="w-10/12 md:w-9/12 lg:10/12 mx-auto relative pb-20">
      <div className="border-l-2 mt-10">
        {jobs.map((job) => (
          <JobComponent job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default JobContainer;
