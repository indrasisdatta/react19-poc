import React, { use } from "react";
import type { ApiType } from "../../types/Api";

export const ProductsList = ({
  productsPromise,
}: {
  productsPromise: Promise<ApiType>;
}) => {
  const products = use(productsPromise);
  console.log("Products with use: ", products);

  const renderProducts = () => {
    /* Error case */
    if (products) {
      if (products?.status === 0) {
        return <p>{products?.error || "No data found"}</p>;
      }
      if (products?.status === 1) {
      }
    }
    /* Success state */
    if (products?.data && products?.data?.length > 0) {
      return (
        <ul>
          {products.data.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      );
    }
    return <p>No products found</p>;
  };

  return (
    <div className="bg-blue-300">
      <h4>ProductsList</h4>
      {renderProducts()}
    </div>
  );
};
