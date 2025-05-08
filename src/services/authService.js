const authUrl = "http://localhost:9010/" + "v1/" + "auth/";

function buildFetchOptions(method, bodyObject) {
  let fetchOptions = {};
  fetchOptions.method = method.toLowerCase();
  if (fetchOptions.method == "post" || fetchOptions.method == "put") {
    fetchOptions.body = JSON.stringify(bodyObject);
    fetchOptions.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  }
  return fetchOptions;
}

async function makeAPICall(url, method, idParam, bodyObject) {
  let fetchOptions = buildFetchOptions(method, bodyObject);
  if (idParam && idParam != null) {
    url += "/" + idParam;
  }
  console.log("API Call: " + url);
  console.log(bodyObject);
  let apiResponse = await fetch(url, fetchOptions);
  if (apiResponse.status != 200) return undefined;
  let apiResponseJSON = await apiResponse.json();
  return apiResponseJSON;
}

export async function authenticate(authBody) {
  console.log("Authorizing...");
  // console.log(authBody);
  let authResponse = await makeAPICall(authUrl, "post", null, authBody);
  // __AUTO_GENERATED_PRINT_VAR_START__
  console.log("authenticate authBody: %s", authBody); // __AUTO_GENERATED_PRINT_VAR_END__
  console.log(authResponse);
  return authResponse;
}
