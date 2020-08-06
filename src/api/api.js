// Global variable
// const baseURL = process.env.REACT_APP_API_URL;
const baseURL = 'https://api.github.com';
const jsonType = 'application/json';

// Helper functions

async function getJSON(url, pathParams, queryParams, cb, errCb) {
  url = replacePathParam(url, pathParams);
  queryParams = getQueryParamsString(queryParams);
  let requestURL = baseURL + url;
  const response = await fetch(requestURL, {
    method: 'GET',
    headers: {
      Accept: jsonType,
      //   Authorization: getToken(),
    },
  })
    .then(checkStatus)
    .then(parseJSON);
  return response;
}

// function postJSON(url, pathParams, body, cb, errCb) {
//   url = replacePathParam(url, pathParams);
//   return fetch(baseURL + url, {
//     method: 'POST',
//     headers: {
//       Accept: jsonType,
//       'Content-Type': jsonType,
//       Authorization: getToken(),
//     },
//     body: JSON.stringify(body),
//   })
//     .then(checkStatus)
//     .then((response) => {
//       execCallBack(response, cb);
//     })
//     .catch((err) => execFallBack(err, errCb));
// }

// function putJSON(url, pathParams, body, cb, errCb) {
//   url = replacePathParam(url, pathParams);
//   return fetch(baseURL + url, {
//     method: 'PUT',
//     headers: {
//       Accept: jsonType,
//       'Content-Type': jsonType,
//       Authorization: getToken(),
//     },
//     body: JSON.stringify(body),
//   })
//     .then(checkStatus)
//     .then((response) => {
//       execCallBack(response, cb);
//     })
//     .catch((err) => execFallBack(err, errCb));
// }

// function postJSONresHTML(url, pathParams, body, cb, errCb) {
//   url = replacePathParam(url, pathParams);
//   const query = fetch(baseURL + url, {
//     method: 'POST',
//     headers: {
//       Accept: 'text/html',
//       'Content-Type': jsonType,
//       Authorization: getToken(),
//     },
//     body: JSON.stringify(body),
//   })
//     .then(checkStatus)
//     .then((response) => {
//       return response.text();
//     });
//   if (isFunc(cb)) {
//     query.then(cb);
//   }
//   query.catch((err) => execFallBack(err, errCb));
//   return query;
// }

// function getResHTML(url, pathParams, queryParams, cb, errCb) {
//   url = replacePathParam(url, pathParams);
//   queryParams = getQueryParamsString(queryParams);
//   if (queryParams) {
//     url = `${url}?${queryParams}`;
//   }
//   const query = fetch(baseURL + url, {
//     method: 'GET',
//     headers: {
//       Accept: 'text/html',
//       'Content-Type': jsonType,
//       Authorization: getToken(),
//     },
//   })
//     .then(checkStatus)
//     .then((response) => {
//       return response.text();
//     });

//   if (isFunc(cb)) {
//     query.then(cb);
//   }
//   query.catch((err) => execFallBack(err, errCb));
//   return query;
// }

// function fileUpload(url, file, cb, errCb) {
//   let formdata = new FormData();
//   formdata.append('file', file);
//   return fetch(baseURL + url, {
//     method: 'POST',
//     headers: {
//       Authorization: getToken(),
//     },
//     body: formdata,
//   })
//     .then(checkStatus)
//     .then((response) => {
//       execCallBack(response, cb);
//     })
//     .catch((err) => execFallBack(err, errCb));
// }

function checkStatus(response) {
  //   const toastr = new ToastrService();
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    parseJSON(response).then((errorResponse) => {
      if (typeof errorResponse === 'object') {
        const message = 'Something went wrong with request';
        // toastr.error(errorResponse.exception || message);
      }
    });
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    return Promise.reject(error);
  }
}

// To parse response when of type json
function parseJSON(response) {
  let result = response;
  if (response.headers && response.headers.get('content-type').includes(jsonType)) {
    // checking response header
    result = response.json();
  }
  return Promise.resolve(result);
}

function execCallBack(response, cb) {
  parseJSON(response).then((resolve) => {
    if (isFunc(cb)) {
      cb(resolve);
    }
  });
}

function execFallBack(err, errCb) {
  return isFunc(errCb) ? errCb(err) : false;
}

function isFunc(fn) {
  return typeof fn === 'function';
}

// function getToken() {
//   const auth = new AuthService();
//   let token = auth.getValFromCookie('token');
//   token = token ? `Bearer ${token}` : '';
//   return token;
// }

function replacePathParam(url = '', params = {}) {
  for (let key in params) {
    let regex = new RegExp(`:${key}`, 'g');
    url = url.replace(regex, params[key]);
  }
  return url;
}

function getQueryParamsString(queryParams = {}) {
  let params = [];
  for (let key in queryParams) {
    params.push(`${key}=${queryParams}`);
  }
  params = params.join('&');
  return params;
}

const API = {
  getJSON,
  //   postJSON,
  //   putJSON,
  //   postJSONresHTML,
  //   getResHTML,
  //   fileUpload,
};
export default API;
