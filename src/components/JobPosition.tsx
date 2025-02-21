import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValue = { role: string };

function JobPosition({ //props from parent
  onChangePosition,
}: {
  onChangePosition: (value: string) => void;
}) {
  const form = useForm<FormValue>();
  const [radioVal, setRadio] = useState("");
  const [inputVal, setInput] = useState("");
  const { register, handleSubmit, setValue } = form;
  const onSubmit = (data: FormValue) => {
    console.log("Submitted", data);
  };
  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    const ra = e.target.value;
    setInput(ra);
    setRadio(ra);
    setValue("role", ra);
    onChangePosition(ra);
  }
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const ra = e.target.value;
    setRadio("");
    setInput(e.target.value);
    setValue("role", ra);
    onChangePosition(ra);
  }
  return (
    <div>
      <h1>JobPosition</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Roles: </label>
          <input
            type="text"
            value={inputVal}
            placeholder="job,title,position"
            {...register("role", { required: "Job Position is required" })}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>SUGGESTION</label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="360 Operator"
              onChange={handleRadio}
              checked={radioVal === "360 Operator"}
            />
            360 Operator
          </label>
          <label>
            <input
              type="radio"
              value="Site Manager"
              onChange={handleRadio}
              checked={radioVal === "Site Manager"}
            />
            Site Manager
          </label>
          <label>
            <input
              type="radio"
              value="Project Manager"
              onChange={handleRadio}
              checked={radioVal === "Project Manager"}
            />
            Project Manager
          </label>
          <label>
            <input
              type="radio"
              value="Steel Fixer"
              onChange={handleRadio}
              checked={radioVal === "Steel Fixer"}
            />
            Steel Fixer
          </label>
        </div>
      </form>
    </div>
  );
}
export default JobPosition;
