import axios from "axios";

import { loadProducts, loadMsg, loadCars } from "./actionCreators";
import { updateReduxStore } from "./util";

const BASE_URL = "http://localhost:7777";

export function fetchAllCarsFromDB() {
  console.log("fetchAllCarsFromDB ran");
  return dispatch => {
    axios
      .get(`${BASE_URL}/get-cars`)
      .then(response => {
        console.log(response);
        dispatch(loadCars(response.data.cars));
      })
      .catch(error => {
        console.error("axios error", error);
      });
  };
}

export function fetchProductsFromDB() {
  return dispatch => {
    axios
      .get(`${BASE_URL}/get-data/`)
      .then(response => {
        // console.log(response.data);
        dispatch(loadProducts(response.data.carsData[0]));
      })
      .catch(error => {
        console.error("axios error", error); // eslint-disable-line no-console
      });
  };
}

export function fetchMsgFromDB() {
  return dispatch => {
    axios
      .get(`${BASE_URL}/get-data-msg/`)
      .then(response => {
        console.log(response);
        dispatch(loadMsg(response.data.msgs[0].msg));
      })
      .catch(error => {
        console.error("axios error", error);
      });
  };
}

export function addMsgToDB(msg) {
  console.log(msg.msg);
  const url = `${BASE_URL}/add-msg`;
  const request = axios.post(url, msg);
  request
    .then(response => {
      console.log(response);
      updateReduxStore(msg.msg);
    })
    .catch(err => {
      console.error("axios error", err);
    });
  return request;
}

// export function addProductToDB(product) {
//   const url = `${BASE_URL}/add`;
//   const request = axios.post(url, product);
//   request
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error("axios error", error); // eslint-disable-line no-console
//     });
//   return request;
// }

// export function deleteProductFromDB(id) {
//   return axios
//     .post(`${BASE_URL}/delete-product/${id}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error("axios error", error); // eslint-disable-line no-console
//     });
// }

// export function updateProductInDB(id, product) {
//   const url = `${BASE_URL}/update-product/${id}`;
//   const request = axios.post(url, product);
//   request
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error("axios error", error); // eslint-disable-line no-console
//     });
//   return request;
// }
