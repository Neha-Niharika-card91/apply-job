import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = { location: string };

function JobLocation({
  //props from parent
  onChangeLocation,
}: {
  onChangeLocation: (value: string) => void;
}) {
  const [isSelected, setSelected] = useState(""); // Tracks selected radio value
  const [inputValue, setInputValue] = useState(""); // Tracks input value

  const form = useForm<FormValues>();
  const { register, handleSubmit, setValue } = form;

  function onRadioSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSelected(value);
    setInputValue(value);
    setValue("location", value);
    onChangeLocation(value);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSelected(""); // Reset radio selection if user types
    setInputValue(value);
    setValue("location", value);
    onChangeLocation(value);
  }

  function onSubmit() {
    alert("Next Page");
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
        </div>
      </form>
    </div>
  );
}

export default JobLocation;
