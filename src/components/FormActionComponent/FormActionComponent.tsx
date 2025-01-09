import React, {
  Suspense,
  useActionState,
  useOptimistic,
  useState,
} from "react";
import { FormInputs } from "./FormInputs";
import { ProductsList } from "./ProductsList";
import { getProducts, getProductsError } from "../../api/ApplicationAPI";

type User = {
  fullName: string | null;
  age: string | null;
};

export const FormActionComponent = () => {
  const [personalizedMsg, setPersonalizedMsg] = useState("");
  const [optimisticData, addOptimisticData] = useOptimistic(
    personalizedMsg,
    // updateFn
    (currentState: any, optimisticValue: any) => {
      // Merge and return new state with optimistic value
      return [...currentState, optimisticValue];
    }
  );

  const submitDataAction = async (previousState: any, formData: FormData) => {
    const fullName = formData.get("fullName");
    const age = formData.get("age");

    console.log("Submit action: ", previousState, fullName, age);

    const message = `${fullName} is ${age} years old`;
    setPersonalizedMsg(message + "..");
    addOptimisticData(message);

    await new Promise((res) => setTimeout(res, 1000));
    // return null;
    return "Invalid form data";
  };

  const [error, submitAction, isPending] = useActionState(
    submitDataAction,
    null
  );

  const productsPromise = getProducts();
  // const productsPromise = getProductsError();

  return (
    <div className="space-y-12s">
      <form action={submitAction} className="w-full max-w-lg">
        <FormInputs error={error} />
      </form>
      <hr />
      {optimisticData && <p>Optimistic update message: {optimisticData}</p>}
      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList productsPromise={productsPromise} />
      </Suspense>
    </div>
  );
};
