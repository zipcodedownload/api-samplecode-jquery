const base = 'https://zipcodedownload.com:5430/';

function assembleURL(params, apiName) {
    // this will receive the parameter(s) as object and assemble URL based on it
    // makes call to makeAPICall() and sends parameters
    let url = base + apiName + '/?';
    for (var key in params) {
        url += key + '=' + params[key] + '&';
    }
    url += 'key=' + '';
    makeAPICall(url);
}
function makeAPICall(url) {
    // this will receive the URL to make call to an API Endpoint
    // makes call to afterGettingData() and sends parameters
    $.ajax({
        cache: false,
        dataType: 'text',
        crossDomain: true,
        type: 'GET',
        url: url,
        //headers: headers,
        success: function (data, status) {
            if (status === 'success') {
                afterGettingData(JSON.parse(data));
            } else {
                console.log("Errored out", status);
                debugger;
            }
        },
        error: function (err) {
            handleValidations(err);
        }
    });
}
