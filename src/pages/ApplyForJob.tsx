import JobLocation from "../components/JobLocation";
import JobPosition from "../components/JobPosition";
import { useState } from "react";

function ApplyForJob() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");

  const onChangeLocation = (value: string) => {
    setLocation(value);
  };

  const onChangePosition = (value: string) => {
    setPosition(value);
  };

  return (
    <div className="justify-content-center">
      <div className="bg-dark d-flex flex-row text-white row m-2 p-2">
        <JobLocation onChangeLocation={onChangeLocation} />
        {location.length > 0 && (
          <JobPosition onChangePosition={onChangePosition} />
        )}
        {position.length > 0 && <>Role</>}
      </div>
    </div>
  );
}
export default ApplyForJob;
