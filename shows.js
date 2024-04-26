$(document).ready(function() {
    $.getJSON('./getShows.php')
        .done(function(data) {
            var upcomingShows = data.upcoming;
            var pastShows = data.past;

            var upcomingHtml = '';
            var pastHtml = '';

            $.each(upcomingShows, function(key, show) {
                // This is an upcoming show
                upcomingHtml += '<div class="row show border-bottom mb-3">';
                upcomingHtml += '<div class="col-md-2 mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-start"><p class="show-date mb-0 show-text-large">' + show.date + '</p></div>';
                upcomingHtml += '<div class="col-md-6 mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-left"><p class="show-venue mb-0 show-text-large">' + show.venue + ' @ ' + show.time + '</p></div>';
                upcomingHtml += '<div class="col-md-4 mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-end"><p class="show-location mb-0 mr-3 show-text-large">' + show.city + '</p>';
                if (show.ticket_link) {
                    upcomingHtml += '<a href="' + show.ticket_link + '" class="btn btn-outline-light buyTix">Buy Tickets</a>';
                }
                upcomingHtml += '</div></div>';
            });
            
            $.each(pastShows, function(key, show) {
                // This is a past show
                pastHtml += '<div class="row show border-bottom mb-3">';
                pastHtml += '<div class="col-md-2 mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-start"><p class="show-date mb-0 show-text-large">' + show.date + '</p></div>';
                pastHtml += '<div class="col-md-6 mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-left"><p class="show-venue mb-0 show-text-large">' + show.venue + ' @ ' + show.time + '</p></div>';
                pastHtml += '<div class="col-md-4 mb-3 d-flex align-items-start align-items-md-center justify-content-start justify-content-md-end"><p class="show-location mb-0 mr-3 show-text-large">' + show.city + '</p>';
                if (show.ticket_link) {
                    pastHtml += '<a href="' + show.ticket_link + '" class="btn btn-outline-light buyTix">Buy Tickets</a>';
                }
                pastHtml += '</div></div>';
            });

            $('#upcomingShowsContainer').html(upcomingHtml);
            $('#pastShowsContainer').html(pastHtml);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            $('#upcomingShowsContainer').html('<p>An error occurred while loading the shows: ' + errorThrown + '</p>');
        });
});