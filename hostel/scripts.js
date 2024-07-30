function initMap() {
    var location = { lat: -19.9333, lng: -43.9333 }; // Coordenadas de Belo Horizonte
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
