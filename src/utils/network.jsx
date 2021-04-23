import axios from "axios";
import { root_url } from "../config/config";

const makeRequest = (path, method, auth, contentType, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: root_url + path,
      method: method,
      data: data,
      headers: {
        "Content-Type": contentType,
        Authorization: auth,
      },
    })
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default makeRequest;
