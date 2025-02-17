const authUrl = process.env.REACT_APP_DOMAIN + "/" + 'auth';

function buildFetchOptions(method,bodyObject) {
    let fetchOptions = {};
    fetchOptions.method = method.toLowerCase();
    if (fetchOptions.method == 'post' || fetchOptions.method == 'put') {
        fetchOptions.body = JSON.stringify(bodyObject);
        fetchOptions.headers = {"Content-Type":"application/json"};
    }
    return fetchOptions;
}

async function makeAPICall(url,method,idParam,bodyObject) {
    let fetchOptions = buildFetchOptions(method,bodyObject);
    if (idParam && idParam != null) {
        url += "/"+idParam;
    }
    console.log("API Call: " + url);
    console.log(bodyObject);
    let apiResponse = await fetch(url,fetchOptions);
    if (apiResponse.status != 200) return undefined;
    let apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
}

export async function authenticate(authBody) {
    console.log("Authorizing...")
    // console.log(authBody);
    let authResponse = await makeAPICall(authUrl ,"post", null , authBody);
    console.log(authResponse);
    return authResponse;
}
