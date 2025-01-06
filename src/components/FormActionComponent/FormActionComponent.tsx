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
    console.log(
      "Submit action: ",
      previousState,
      formData.get("fullName"),
      formData.get("age")
    );
    setPersonalizedMsg(
      `${formData.get("fullName")} is ${formData.get("age")} years old..`
    );
    addOptimisticData(
      `${formData.get("fullName")} is ${formData.get("age")} years old`
    );
    // setOptimisticData({
    //   fullName: formData.get("fullName") as string | null,
    //   age: formData.get("age") as string | null,
    // });
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
