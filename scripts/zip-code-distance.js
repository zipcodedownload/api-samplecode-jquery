let context = this;
function getData() {
    let model = {
        country: '',
        format: 'json',
        pagenumber: 1
    };
    model.zipList = $('#zipCode').val();
    model.distance = $('#distance-lt').val();
    context.assembleURL(model, 'ZipListDistance');
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
        <div class="card card-width" id="`+data[i].from+`-`+data[i].to+`" style="margin: 7px;">
            <div class="card-body">
                <h5 class="card-title">`+data[i].from+` to `+data[i].to+`</h5>
                <h6 class="card-subtitle mb-2 text-muted">Distance: `+data[i].dist+` miles.</h6>
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