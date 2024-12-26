import React, { useActionState, useOptimistic } from "react";

export const FormActionComponent = () => {
  const [optimisticData, setOptimisticData] = useOptimistic({
    fullName: "",
    age: "",
  });

  const submitDataAction = async (previousState, formData) => {
    console.log(
      "Submit action: ",
      previousState,
      formData.get("fullName"),
      formData.get("age")
    );
    setOptimisticData({
      fullName: formData.get("fullName"),
      age: formData.get("age"),
    });
    await new Promise((res) => setTimeout(res, 1000));
    // return null;
    return "Invalid form data";
  };

  const [error, submitAction, isPending] = useActionState(
    submitDataAction,
    null
  );

  return (
    <div>
      <form action={submitAction}>
        <input type="text" name="fullName" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
        <p>{isPending ? "Loading..." : error}</p>
      </form>
      <p>Optimistic update:</p>
      <p>Name: {optimisticData.fullName}</p>
      <p>Age: {optimisticData.age}</p>
    </div>
  );
};
