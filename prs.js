$(document).ready(function() {
    MAX_SHOWN_PRODUCTS = 4;
    PRS_URL_RCHP = 'http://vbu-channeldata-prs-service-dev.eu-west-1.elasticbeanstalk.com/v1/recommendation/en-us_rchp/';

    $.ajax({
        url : PRS_URL_RCHP + utag_data.VisitorId,
        success : function(data){
            var lastElementId = ".first-element";
            $(lastElementId).text(JSON.stringify(data));

            if (data != null && data.recommendations != null && data.recommendations.length > 0){
                var count = 0;

                data.recommendations.forEach(function(element, index, array){
                    if (count < MAX_SHOWN_PRODUCTS ){
                        var productId = '#product_' + element.pfid;
                        var currentElement = $(productId);
                        currentElement.insertAfter(lastElementId);
                        currentElement.removeClass("hidden");
                        lastElementId = productId;
                        count++;
                    }
                });

                // removing still hidden elements
                $(".col-3.tiles.col-xs-6.hidden").remove();
            }
        }
    });

});