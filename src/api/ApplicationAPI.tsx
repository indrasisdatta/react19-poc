import type { ApiType } from "../types/Api";

export const getProducts = async (): Promise<ApiType> => {
  return new Promise<ApiType>((resolve, reject) => {
    resolve({
      status: 1,
      data: [
        { id: 1, title: "Product A" },
        { id: 2, title: "Product B" },
        { id: 3, title: "Product C" },
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
