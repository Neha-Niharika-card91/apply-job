import JobLocation from "../components/JobLocation";
import JobPosition from "../components/JobPosition";
import PersonalDetails from "../components/PersonalDetails";
import { ThumbsUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
type FormValue = { name: string; phone: string };
function ApplyForJob({}) {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [details, setDetails] = useState<null | FormValue>(null);

  const onChangeLocation = (value: string) => {
    setLocation(value);
  };

  const onChangePosition = (value: string) => {
    setPosition(value);
  };

  const onChangeDetails = (value: FormValue) => {
    setDetails(value);
  };
  return (
    <div
      className="justify-content-center overflow-auto"
      style={{ maxHeight: "100vh" }}
    >
      <div className="container-fluid d-flex flex-row align-items-center justify-content-evenly w-100 ">
        <div className="d-flex text-center">
          {location.length == 0 && (
            <button className="btn btn-primary rounded-circle mb-1">1</button>
          )}
          {location.length > 0 && <CheckCircle2 className="mt-3" />}
          <p className="mt-3">Job Location</p>
        </div>
        <hr style={{ width: "20%" }} />
        <div className="d-flex flex-row text-center mx-4">
          {(location.length == 0 || position.length == 0) && (
            <button className="btn btn-primary rounded-circle mb-1">2</button>
          )}
          {location.length > 0 && position.length > 0 && (
            <CheckCircle2 className="mt-3" />
          )}
          <p className="mt-3">Job Position</p>
        </div>
        <hr style={{ width: "20%" }} />
        <div className="text-center d-flex flex-row ">
          {!details && (
            <button className="btn btn-primary rounded-circle mb-1">3</button>
          )}
          {details && <CheckCircle2 className="mt-3" />}
          <p className="mt-3">Personal Details</p>
        </div>
      </div>
      {details && (
        <div className="container d-flex flex-column justify-content-center align-items-center border p-2 ">
          <ThumbsUp size={50} />
          <h3>We have recieved your application !</h3>
          <p>We will process it and reach out to you in a few days</p>
        </div>
      )}
      {!details && (
        <div className="d-flex flex-row  text-white row m-2 p-2">
          <JobLocation onChangeLocation={onChangeLocation} />
          {location.length > 0 && (
            <JobPosition onChangePosition={onChangePosition} />
          )}
          {position.length > 0 && location.length > 0 && (
            <PersonalDetails onChangeDetails={onChangeDetails} />
          )}
        </div>
      )}
    </div>
  );
}
export default ApplyForJob;
