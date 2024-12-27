import React from "react";
import { useFormStatus } from "react-dom";

export const FormInputs = ({ error }: { error: null | string }) => {
  const { pending, data, method, action } = useFormStatus();

  console.log("Form status: ", { pending, data, method, action });

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="sm:col-6">
        <input type="text" name="fullName" placeholder="Name" className="" />
      </div>
      <div className="sm:col-6">
        <input type="text" name="age" placeholder="Age" />
      </div>
      <div>
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </div>
      <p>{pending ? "Loading..." : error}</p>
    </div>
  );
};
