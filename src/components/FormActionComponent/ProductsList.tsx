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
        <ul className="space-y-4">
          {products.data.map((p) => (
            <li key={p.id} className="flex items-center gap-4">
              <img
                src={p.image}
                alt={p.title}
                className="w-16 h-16 object-cover"
              />
              <span className="text-gray-800">{p.title}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-red-500">No products found</p>;
  };

  return (
    <div className="bg-gray-200">
      <h4>ProductsList</h4>
      {renderProducts()}
    </div>
  );
};
