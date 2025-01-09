import type { ApiType } from "../types/Api";

export const getProducts = async (): Promise<ApiType> => {
  return new Promise<ApiType>((resolve, reject) => {
    resolve({
      status: 1,
      data: [
        {
          id: 1,
          title: "Product A",
          image:
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
        },
        {
          id: 2,
          title: "Product B",
          image:
            "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
        },
        {
          id: 3,
          title: "Product C",
          image:
            "https://cdn.dummyjson.com/products/images/groceries/Juice/2.png",
        },
      ],
      error: null,
    });
  }).catch(() => {
    return {
      status: 0,
      data: null,
      error: "Invalid data",
    };
  });
};

export const getProductsError = async (): Promise<ApiType> => {
  return new Promise<ApiType>((resolve, reject) => {
    reject("Invalid product");
  }).catch((error) => {
    console.log("Catch error: ", error);
    return {
      status: 0,
      data: null,
      error,
    };
  });
};
