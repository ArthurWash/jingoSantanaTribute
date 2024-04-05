$(document).ready(function() {
    $.getJSON('./getShows.php')
        .done(function(shows) {
            if (shows.length === 0) {
                var html = '<p>No upcoming shows</p>';
            } else {
                var html = '';
                $.each(shows, function(key, show) {
                    html += '<div class="row show border-bottom mb-3">';
                    html += '<div class="col-md mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-start"><p class="show-date mb-0">' + show.date + '</p></div>';
                    html += '<div class="col-md ml-md-auto mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-center"><p class="show-venue mb-0">' + show.venue + ' @ ' + show.time + '</p></div>';
                    html += '<div class="col-md ml-md-auto mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-end"><p class="show-location mb-0 mr-3">' + show.city + '</p>';
                    if (show.ticket_link) {
                        html += '<a href="' + show.ticket_link + '" class="btn btn-outline-light buyTix">Buy Tickets</a>';
                    }
                    html += '</div>';
                    html += '</div>';
                });
            }
            $('#showsContainer').html(html);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            $('#showsContainer').html('<p>An error occurred while loading the shows: ' + errorThrown + '</p>');
        });
});