import React from "react";
import { useFormStatus } from "react-dom";

export const FormInputs = ({ error }: { error: null | string }) => {
  const { pending, data, method, action } = useFormStatus();

  console.log("Form status: ", { pending, data, method, action });

  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Full Name"
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="age"
        >
          Age
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="age"
          name="age"
          type="text"
          placeholder="Age"
        />
      </div>
      <div className="w-full px-3 mt-6">
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        {pending && <p className="text-gray-500 text-sm mt-2">Loading...</p>}
      </div>
    </div>
  );
};
