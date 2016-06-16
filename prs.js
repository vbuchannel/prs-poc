$(document).ready(function() {
    MAX_SHOWN_PRODUCTS = 4;
    PRS_URL_RCHP = 'http://vbu-channeldata-prs-service-dev.eu-west-1.elasticbeanstalk.com/v1/recommendation/en-us_rchp/';
    $.ajax({
        url : PRS_URL_RCHP + utag_data.VisitorId,
        success : function(data){
            if (data != null && data.recommendations != null && data.recommendations.length > 0){
                var count = 0;
                var lastElement = $("first-element");
                data.recommendations.forEach(function(element, index, array){
                    if (count < MAX_SHOWN_PRODUCTS ){
                        var currentElement = $('#product_' + element.pfid);
                        currentElement.insertAfter(lastElement);
                        currentElement.removeClass("hidden");
                        lastElement = currentElement;
                        count++;
                    }
                });

            }
        }
    });
});