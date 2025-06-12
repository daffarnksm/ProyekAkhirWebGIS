// Initialize the map
let map, userMarker, routingControl = null;
let userLocation = [-6.2380, 106.9753]; // Default location (Bekasi City center)
let activeCategory = 'all'; // Track active category

document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initNavigation();
    initContactForm();
});

// Initialize the map with all features
function initMap() {
    map = L.map('map', {
        center: userLocation,
        zoom: 13,
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: 'topleft'
        }
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Tombol home
    const homeCoords = [-6.2192153, 106.9666632];
    const homeZoom = 13;
    L.easyButton('fa-home', function(btn, map){
        map.setView(homeCoords, homeZoom);
    }, 'Kembali ke Home').addTo(map);

    // Marker lokasi pengguna
    userMarker = L.circleMarker(userLocation, {
        radius: 8,
        fillColor: "#4285f4",
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = [position.coords.latitude, position.coords.longitude];
                userMarker.setLatLng(userLocation);
                map.panTo(userLocation);
            },
            function(error) {
                alert('Gagal mendapatkan lokasi Anda. Menggunakan lokasi default (Bekasi).');
                console.log('Error getting location:', error.message);
            }
        );
    }

    const layers = {
        natural: L.layerGroup(),
        recreation: L.layerGroup(),
        shopping: L.layerGroup(),
        religious: L.layerGroup(),
        historical: L.layerGroup()
    };

    const icons = {
        natural: createCustomIcon('🌳', '#34a853'),
        recreation: createCustomIcon('🎡', '#fbbc05'),
        shopping: createCustomIcon('🛍️', '#ea4335'),
        religious: createCustomIcon('🕌', '#9c27b0'),
        historical: createCustomIcon('🏛️', '#795548')
    };

    addMarkersToLayer(naturalTourism, layers.natural, icons.natural);
    addMarkersToLayer(recreationTourism, layers.recreation, icons.recreation);
    addMarkersToLayer(shoppingTourism, layers.shopping, icons.shopping);
    addMarkersToLayer(religiousTourism, layers.religious, icons.religious);
    addMarkersToLayer(historicalTourism, layers.historical, icons.historical);

    const overlayLayers = {
        "🌳 Wisata Alam & Taman": layers.natural,
        "🎡 Wisata Buatan & Rekreasi": layers.recreation,
        "🛍️ Wisata Belanja & Kuliner": layers.shopping,
        "🕌 Wisata Religi": layers.religious,
        "🏛️ Wisata Sejarah & Edukasi": layers.historical
    };

    fetch('geojson/batasadm.geojson')
        .then(response => response.json())
        .then(geojsonData => {
            const batasAdmin = L.geoJSON(geojsonData, {
                style: {
                    color: "#000",
                    weight: 2,
                    fillOpacity: 0
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup("Wilayah: " + feature.properties.name);
                    }
                }
            });
            batasAdmin.addTo(map);
            overlayLayers["🗺️ Batas Administrasi"] = batasAdmin;

            L.control.layers(null, overlayLayers, {
                collapsed: true,
                position: 'topright'
            }).addTo(map);
        });

    Object.values(layers).forEach(layer => layer.addTo(map));

    // Tombol kategori
    const categoriesDiv = document.createElement('div');
    categoriesDiv.className = 'map-categories';
    categoriesDiv.innerHTML = `
        <button class="category-button all active" onclick="showCategory('all')">📍 Semua Kategori</button>
        <button class="category-button natural" onclick="showCategory('natural')">🌳 Wisata Alam & Taman</button>
        <button class="category-button recreation" onclick="showCategory('recreation')">🎡 Wisata Buatan & Rekreasi</button>
        <button class="category-button shopping" onclick="showCategory('shopping')">🛍️ Wisata Belanja & Kuliner</button>
        <button class="category-button religious" onclick="showCategory('religious')">🕌 Wisata Religi</button>
        <button class="category-button historical" onclick="showCategory('historical')">🏛️ Wisata Sejarah & Edukasi</button>
    `;
    document.querySelector('.map-section').appendChild(categoriesDiv);

    window.mapLayers = layers;
}

function createCustomIcon(emoji, color) {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">${emoji}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}

function addMarkersToLayer(places, layer, icon) {
    places.forEach(place => {
        const marker = L.marker([place.lat, place.lng], { icon: icon }).addTo(layer);
        const popupContent = `
            <div class="popup-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <p>Buka Jam: ${place.opening_hours}</p>
                <p>Harga Masuk: ${place.ticket_price}</p>
                <p>Fasilitas: ${place.facilities}</p>
                <button class="btn-route" onclick="createRoute(${place.lat}, ${place.lng})">Lihat Rute</button>
            </div>
        `;
        marker.bindPopup(popupContent);
    });
}

function showCategory(category) {
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains(category)) {
            btn.classList.add('active');
        }
    });

    if (category === 'all') {
        Object.values(window.mapLayers).forEach(layer => map.addLayer(layer));
    } else {
        Object.entries(window.mapLayers).forEach(([key, layer]) => {
            if (key === category) {
                map.addLayer(layer);
            } else {
                map.removeLayer(layer);
            }
        });

        // Zoom ke bounds kategori
        const bounds = L.latLngBounds([]);
        window.mapLayers[category].eachLayer(layer => {
            if (layer.getLatLng) bounds.extend(layer.getLatLng());
        });
        if (bounds.isValid()) {
            map.fitBounds(bounds.pad(0.2));
        }
    }

    activeCategory = category;
}

function createRoute(lat, lng) {
    if (routingControl) {
        map.removeControl(routingControl);
    }

    routingControl = L.Routing.control({
        waypoints: [
            L.latLng(userLocation[0], userLocation[1]),
            L.latLng(lat, lng)
        ],
        routeWhileDragging: false,
        showAlternatives: true,
        altLineOptions: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: 'white', opacity: 0.8, weight: 6},
                {color: 'blue', opacity: 0.5, weight: 2}
            ]
        },
        lineOptions: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: 'white', opacity: 0.8, weight: 6},
                {color: '#4285f4', opacity: 0.5, weight: 4}
            ]
        }
    }).addTo(map);

    routingControl.on('routesfound', function() {
        const container = document.querySelector('.leaflet-routing-container');
        if (container) {
            container.style.marginTop = '60px';
        }
    });

    document.getElementById('route-control').classList.remove('hidden');
}

function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan berhasil dikirim! (Simulasi)');
            contactForm.reset();
        });
    }
}
