import React from "react";
import { useFormStatus } from "react-dom";

export const FormInputs = ({ error }: { error: null | string }) => {
  const { pending, data, method, action } = useFormStatus();

  console.log("Form status: ", { pending, data, method, action });

  return (
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
    </form>
  );

  return (
    <div className="grid grid-cols-3 ">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>

      <div>
        <label
          htmlFor="fullName"
          className="block text-sm/6 font-semibold text-gray-900"
        >
          Full Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Name"
            className="block w-full rounded-md bg-white px-3 py-2 outline outline-1 plcaeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
          />
        </div>
      </div>
      <div className="">
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
