import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = { location: string };

function JobLocation({
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
    <div className="text-dark">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="container mt-5">
          <div className="d-flex align-items-center border p-3">
            <label id="location" className="me-2 fw-bold">
              Location:
            </label>
            <input
              value={inputValue}
              {...register("location", {
                required: "Job Location is required",
              })}
              type="text"
              placeholder="city, area, ..."
              className="form-control border-0"
              onChange={onInputChange}
            />
          </div>
          {!inputValue && (
            <div className="mt-4">
              <label className="form-label m-2">SUGGESTION</label>
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
          )}
        </div>
      </form>
    </div>
  );
}

export default JobLocation;
