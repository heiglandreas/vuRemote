/**
 * Created by heiglandreas on 13.05.16.
 */

function webapi_execute(url, callback) {
    var jqxhr = $.ajax( url ).done(function() {
        if (typeof callback !== 'undefined') {
            callback();
        }
    });
    return false;
}

$('[data-key]').on('click', function(e){
    var key = $(this).data('key');
    webapi_execute("http://vu.home.heigl.org/api/remotecontrol?command=" + key);
});