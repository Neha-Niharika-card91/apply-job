import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import JobPosition from "./JobPosition";

type FormValues = { location: string };

function JobLocation() {
  const [isSelected, setSelected] = useState(""); // Tracks selected radio value
  const [inputValue, setInputValue] = useState(""); // Tracks input value
  const [isComplete, setComplete] = useState(false);

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, setValue } = form;

  function onRadioSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSelected(value);
    setInputValue(value); // Update input field with radio selection
    setValue("location", value);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSelected(""); // Reset radio selection if user types
    setInputValue(value);
    setValue("location", value);
  }

  function onSubmit() {
    alert("Next Page");
    setComplete(true);
  }

  return (
    <div className="text-light">
      <h1>JobLocation</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="d-flex flex-column input-group">
          <div className="d-flex">
            <label className="input-group-text" id="location">
              Location
            </label>
            <input
              value={inputValue}
              {...register("location", {
                required: "Job Location is required",
              })}
              type="text"
              placeholder="city, area, ..."
              className="form-control "
              onChange={onInputChange}
            />
          </div>

          <div>
            <label>SUGGESTION</label>
            <label>
              <input
                type="radio"
                value="HSR, Bangalore"
                onChange={onRadioSelect}
                checked={isSelected === "HSR, Bangalore"}
              />
              HSR, Bangalore
            </label>
            <label>
              <input
                type="radio"
                value="JP Nagar, Bangalore"
                onChange={onRadioSelect}
                checked={isSelected === "JP Nagar, Bangalore"}
              />
              JP Nagar, Bangalore
            </label>
          </div>
          {!isComplete && <button type="submit">Next</button>}
        </div>
      </form>
      {isComplete && <JobPosition />}
      <DevTool control={control} />
    </div>
  );
}

export default JobLocation;
