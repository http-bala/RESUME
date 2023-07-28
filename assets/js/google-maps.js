function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 20.452575851083576, lng: 72.86466824461662};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'bhimpore,nani daman' // Title Location
    });
}
//  latitude , longitutde
// 20.452575851083576, 72.86466824461662