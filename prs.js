$(document).ready(function() {

    $.ajax({
        url : 'http://vbu-channeldata-prs-service-dev.eu-west-1.elasticbeanstalk.com/v0/recommendation/en-us_rchp/' + utag_data.VisitorId,
        success : function(data){
            if (data != null && data.recommendations != null && data.recommendations.length > 0){
                data.recommendations.forEach(function(element, index, array){
                    var pfid = element.productId;
                    $('#product_' + pfid).show();
                });
            }
        }
    });
});