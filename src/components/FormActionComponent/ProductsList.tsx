import React, { use } from "react";
import type { ApiType } from "../../types/Api";

export const ProductsList = ({
  productsPromise,
}: {
  productsPromise: Promise<ApiType>;
}) => {
  const products = use(productsPromise);
  console.log("Products with use: ", products);

  return (
    <div className="bg-blue-300">
      <h4>ProductsList</h4>
      {products && products?.data && products?.data?.length > 0 && (
        <ul>
          {products.data.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
      {products?.data?.length === 0 && <p>No products found</p>}
    </div>
  );
};
