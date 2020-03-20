// Old javascript syntax
function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }

  // logic to make the request
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");

// ES6 syntax
function newMakeAjaxRequest(url, method = "GET") {
  // the method parameter will be 'get' in case this function will call
  // with undefined argument that pass to method
}
