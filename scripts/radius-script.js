let context = this;
function getData() {
    let model = {
        country: '',
        format: 'json',
        pagenumber: 1
    };
    model.firstzipcode = $('#zipCode').val();
    model.radiuscoverage = $('#radius').val();
    context.assembleURL(model, 'Radius');
    $('#validation').css('display', 'none');
}

function afterGettingData(data) {
    if (data.length === 0) {
        handleValidations();
        return;
    }
    var selectHTML = '';
    for(i=0; i<data.length; i=i+1){
        selectHTML+= `
        <div class="card card-width" id="`+data[i].ZipCode+`" style="margin: 7px;">
            <div class="card-body">
                <h5 class="card-title">`+data[i].ZipCode+`, `+data[i].City+`</h5>
                <h6 class="card-subtitle mb-2 text-muted">`+data[i].Distance+` miles form `+$('#zipCode').val()+`</h6>
                <p class="card-text">County: `+data[i].County+`</p>
                <p class="card-text">State: `+data[i].State+`</p>
            </div>
        </div>`;
    }
    document.getElementById('card-container').innerHTML = selectHTML;
    $('#card-container').css('display', '');
}

function handleValidations() {
    $('#validation').css('display', 'inline-block');
    $('#card-container').css('display', 'none');
}