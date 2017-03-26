function addEvent(time, eventName, location, url) {
    var html = '<li><a href = "' + url + '"><span class = "event-time">' + time + '</span> <span class = "event-name">' + eventName + '</span><br/><span class = "event-location">' + location + '< /span></a></li>';
    $(".events-detail").append(html);
}
