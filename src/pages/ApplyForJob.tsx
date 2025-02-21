import JobLocation from "../components/JobLocation";
import JobPosition from "../components/JobPosition";
import Pagitation from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function ApplyForJob() {
  const [page, setPage] = useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="justify-content-center">
      <Stack>
        <Pagitation count={2} page={page} onChange={handleChange} />
      </Stack>
      <div className="bg-dark d-flex flex-row text-white row m-2 p-2">
        {page === 1 && <JobLocation />}
        {page === 2 && <JobPosition />}
      </div>
    </div>
  );
}
export default ApplyForJob;
