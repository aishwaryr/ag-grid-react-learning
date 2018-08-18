import { LOAD_PRODUCTS } from "./actions";
// import { UPDATE_PRODUCTS } from "./actions";

export function loadProducts(productsData) {
  console.log(productsData);
  return { type: LOAD_PRODUCTS, payload: productsData };
}

// export function updateProducts(productsData) {
//   return { type: UPDATE_PRODUCTS, payload: productsData };
// }
