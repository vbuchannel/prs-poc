$(document).ready(function() {
    alert("hello");

    $.ajax({
        url : 'http://vbu-channeldata-prs-service-dev.eu-west-1.elasticbeanstalk.com/v0/recommendation/en-us_rchp/103213',
        success : function(){
            alert('success');
        }
    });
});