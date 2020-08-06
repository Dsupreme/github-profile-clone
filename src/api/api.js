// Global variable

const baseURL = 'https://api.github.com';
const jsonType = 'application/json';

// Helper functions
async function getJSON(url) {
  let requestURL = baseURL + url;
  const response = await fetch(requestURL, {
    method: 'GET',
    headers: {
      Accept: jsonType
    },
  })
    .then(checkStatus)
    .then(parseJSON);
  return response;
}



function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
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

const API = {
  getJSON
};
export default API;
