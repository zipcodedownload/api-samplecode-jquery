$(document).load(function (params) {
    // this function is only for illustration purposes.
    // apiKey can be predefined in a variable/constant or can be used from localstorage as below
    
});

$('#zipCode').on('keyup',function () {

});

function assembleURL(params) {
    // this will receive the parameter(s) as object and assemble URL based on it
    // makes call to makeAPICall() and sends parameters
    console.log(params);
}

function makeAPICall(params) {
    // this will receive the URL to make call to an API Endpoint
    // makes call to afterGettingData() and sends parameters
}

function afterGettingData(params) {
    // this will populate relevant form fields
}