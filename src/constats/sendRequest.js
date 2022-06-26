export function sendRequest(method, requestURL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, requestURL);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
}

const requestURL = `https://api.staging.clickyourhome.net/project_design/list?range=priceRange&sort=viewsCount`;
sendRequest('GET', requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
