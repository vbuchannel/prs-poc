$(document).ready(function() {

    $.ajax({
        url : 'http://vbu-channeldata-prs-service-dev.eu-west-1.elasticbeanstalk.com/v1/recommendation/en-us_rchp/' + utag_data.VisitorId,
        success : function(data){
            if (data != null && data.recommendations != null && data.recommendations.length > 0){
                var count = 0;
                var lastElement = $("first-element");
                data.recommendations.forEach(function(element, index, array){
                    if (count<4){
                        var currentElement = $('#product_' + element.pfid);
                        currentElement.insertAfter(lastElement);
                        currentElement.removeClass("hidden");
                        count++;
                        lastElement = currentElement;
                    }
                });
            }
        }
    });
});