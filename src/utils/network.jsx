import axios from "axios";

const makeRequest = (url, method, contentType, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      data: data,
      headers: {
        "Content-Type": contentType,
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
