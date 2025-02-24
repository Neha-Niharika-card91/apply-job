import { useForm } from "react-hook-form";
import { useState } from "react";
import Positions from "./Positions";

type FormValue = { role: string };

function JobPosition({
  onChangePosition,
}: {
  onChangePosition: (value: string) => void;
}) {
  const [radioVal, setRadio] = useState("");
  const [inputVal, setInput] = useState("");
  const form = useForm<FormValue>();
  const { register, handleSubmit, setValue } = form;

  const onSubmit = (data: FormValue) => {
    console.log("Submitted", data);
  };

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    const radioInput = e.target.value;
    setInput(radioInput);
    setRadio(radioInput);
    setValue("role", radioInput);
    onChangePosition(radioInput);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setRadio("");
    setInput(e.target.value);
    setValue("role", input);
    onChangePosition(input);
  }

  return (
    <div className=" text-dark">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="container mt-5">
          <div className="d-flex align-items-center border p-3">
            <label className="me-2 fw-bold">Roles: </label>
            <input
              type="text"
              value={inputVal}
              placeholder="job, title, position"
              {...register("role", { required: "Job Position is required" })}
              onChange={handleInput}
              className="form-control border-0"
            />
          </div>
          {!inputVal && (
            <div className="container p-3">
              <label>SUGGESTION</label>
              <div className="d-flex flex-row justify-content-evenly">
                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="360 Operator"
                    onChange={handleRadio}
                    checked={radioVal === "360 Operator"}
                    className="d-flex flex-column form-check-input"
                  />
                  <Positions
                    jobTitle="360 Operator"
                    position="Operate and maintain 360 excavator for construction projects"
                    wage="From $30 per hour"
                  />
                </div>

                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="Site Manager"
                    onChange={handleRadio}
                    checked={radioVal === "Site Manager"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="Site Manager"
                    position="Manage project plans, budgets and schedules throughout project lifecycle"
                    wage="From $32 per hour"
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-evenly">
                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="Project Manager"
                    onChange={handleRadio}
                    checked={radioVal === "Project Manager"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="Project Manager"
                    position="Manage construction projects and ensure adherence to plans"
                    wage="From $42 per hour"
                  />
                </div>

                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="Steel Fixer"
                    onChange={handleRadio}
                    checked={radioVal === "Steel Fixer"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="Steel Fixer"
                    position="Install steel reinforcement bars in concrete structures"
                    wage="From $22 per hour"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default JobPosition;
