let context = this;
$('#zipCode').on('keyup',function () {
    // check if input is zip code or a postal code
    // makes call to assembleURL() and sends parameters
    let val = document.getElementById('zipCode').value
    let model = {
        country: '',
        format: 'json',
        pagenumber: 1
    };
    let fieldnames = [
        'cityName',
        'provinceName'
    ];
    event.preventDefault();
    let canRegEx = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?/i,
            usRegEx = /^\d{5}(-\d{4})?$/i;
    if(val.match(canRegEx) && val.length === 6) {
        model.country = 'ca';
        model.postalcode = val;
        $('#zipCodeValidation').css('display','none');
        context.assembleURL(model, 'Filter');
    }
    else if(val.match(usRegEx) && val.length === 5) {
        model.country = 'us5';
        model.postalcode = val;
        $('#zipCodeValidation').css('display','none');
        context.assembleURL(model, 'Filter');
    }
    else {
        context.handleValidations()
    }
});


function afterGettingData(data) {
    // this will populate relevant form fields
    if(data.length === 0) {
        handleValidations();
        return;
    }

    var dummy;
    if(data.length != undefined)
        data.forEach(item => {
            dummy = item.city_type === 'D' ? item : {};
        });
    else
        dummy = data;
    
    $('#cityName').val(dummy.city_name);
    $('#provinceName').val(dummy.province);
}

function handleValidations() {
    $('#zipCodeValidation').text('Incorrect zip/postal code')
    $('#zipCodeValidation').css('display','inline-block');
}