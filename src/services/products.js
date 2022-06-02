import { base_url, headers } from "./config";

export const fetchBestSellingProduct = () => {
  const options = {
    method: "GET",
    headers: headers,
  };
  return fetch(
    base_url + "/products/v2/list?cat_id=0&sort=best_seller&page=1",
    options
  )
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log("Error" + err.message));
};

export const fetchCartProduct = (usItemId) => {
  const options = {
    method: "GET",
    params: { usItemId },
    headers: headers,
  };

  return fetch(base_url + "/products/v3/get-details", options)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log("Error" + err.message));
};
