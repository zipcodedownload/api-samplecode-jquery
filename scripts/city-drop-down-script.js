let context = this;
$('#cityName').on('keyup', function () {
    action();
});

$('#countryName').on('change', function () {
    action();
});

function action() {
    let model = {
        country: '',
        format: 'json',
        pagenumber: 1
    };
    model.city = document.getElementById('cityName').value
    event.preventDefault();
    model.country = $('#countryName').val() === 'canada' ? 'ca' : 'us5';
    context.assembleURL(model, 'City');
    $('#cityNameValidation').css('display', 'none');
}

function afterGettingData(data) {
    if (data.length === 0) {
        handleValidations();
        return;
    }
    var selectHTML = '';
    for(i=0; i<data.length; i=i+1){
        selectHTML+= "<option value='"+data[i].postal_code+"'>"+data[i].postal_code+" "+data[i].city_name+" "+data[i].province+"</option>";
    }
    document.getElementById('selectZipCode').innerHTML = selectHTML;
}

function handleValidations() {
    $('#cityNameValidation').text('No zip/postal code for that city name.');
    $('#cityNameValidation').css('display', 'inline-block');
    document.getElementById('selectZipCode').innerHTML = '<option value="NULL">Select</option>';
}
