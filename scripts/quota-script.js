let context = this;
function getData() {
    let model = {
        format: 'json'
    };
    model.key = $('#apikey').val();
    context.assembleURL(model, 'Quota');
    $('#validation').css('display', 'none');
}

function afterGettingData(data) {
    if (!data.NumberOfQueriesConsumed) {
        context.handleValidations();
    }

    var msg = `You have used ` +data.NumberOfQueriesConsumed+ ` of ` +data.NumberOfQueriesAllowed+ `
    for the `+data.ProductName+ ` product. Your subscription expires on ` +data.ExpirationDate;

    document.getElementById('card-container').innerHTML = msg;
    $('#card-container').css('display', '');
}

function handleValidations() {
    $('#validation').css('display', 'inline-block');
    $('#card-container').css('display', 'none');
}