function initMap() {
    
    // Configuração da localização incial do mapa
    const location = { lat: -23.550520, lng: -46.633308 }; // localização de São Paulo, SP
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location, 
    });

    // Marcador no mapa
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Próximos Eventos",
    });
}
