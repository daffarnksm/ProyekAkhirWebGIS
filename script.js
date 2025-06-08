// Initialize the map
let map, userMarker, routingControl = null;
let userLocation = [-6.2380, 106.9753]; // Default location (Bekasi City center)
let activeCategory = 'all'; // Track active category
let batasAdminLayer; // untuk GeoJSON batas wilayah


document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initNavigation();
    initContactForm();
});

// Initialize the map with all features
function initMap() {
    // Create the map
    map = L.map('map', {
        center: userLocation,
        zoom: 13,
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: 'topleft'
        }
    });

    // Add tile layer (base map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //home
    // Koordinat awal peta (pusat Home)
const homeCoords = [-6.2192153,106.9666632]; // contoh: Bandung
const homeZoom = 13;

// Tombol home
L.easyButton('fa-home', function(btn, map){
  map.setView(homeCoords, homeZoom);
}, 'Kembali ke Home').addTo(map);



    // Add user location marker with blue color
    userMarker = L.circleMarker(userLocation, {
        radius: 8,
        fillColor: "#4285f4",
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);

    // Try to get user's actual location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = [position.coords.latitude, position.coords.longitude];
                userMarker.setLatLng(userLocation);
                map.panTo(userLocation);
            },
            function(error) {
                console.log('Error getting location:', error.message);
            }
        );
    }

    // Create layer groups for each category
    const layers = {
        natural: L.layerGroup(),
        recreation: L.layerGroup(),
        shopping: L.layerGroup(),
        religious: L.layerGroup(),
        historical: L.layerGroup()
    };

    // Define custom icons for each category
    const icons = {
        natural: createCustomIcon('🌳', '#34a853'),
        recreation: createCustomIcon('🎡', '#fbbc05'),
        shopping: createCustomIcon('🛍️', '#ea4335'),
        religious: createCustomIcon('🕌', '#9c27b0'),
        historical: createCustomIcon('🏛️', '#795548')
    };

    // Add markers to their respective layers
    addMarkersToLayer(naturalTourism, layers.natural, icons.natural);
    addMarkersToLayer(recreationTourism, layers.recreation, icons.recreation);
    addMarkersToLayer(shoppingTourism, layers.shopping, icons.shopping);
    addMarkersToLayer(religiousTourism, layers.religious, icons.religious);
    addMarkersToLayer(historicalTourism, layers.historical, icons.historical);

    
// Layer control manual untuk hidup/matikan layer
const overlayLayers = {
    "🌳 Wisata Alam & Taman": layers.natural,
    "🎡 Wisata Buatan & Rekreasi": layers.recreation,
    "🛍️ Wisata Belanja & Kuliner": layers.shopping,
    "🕌 Wisata Religi": layers.religious,
    "🏛️ Wisata Sejarah & Edukasi": layers.historical
};

// Tambahkan layer GeoJSON batas administrasi
fetch('geojson/batasadm.geojson')
    .then(response => response.json())
    .then(geojsonData => {
        const batasAdminLayer = L.geoJSON(geojsonData, {
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
        batasAdminLayer.addTo(map);
        // Masukkan ke kontrol layer
        overlayLayers["🗺️ Batas Administrasi"] = batasAdminLayer;

        // Gabungkan semua overlay, termasuk batas dan wisata
        L.control.layers(null, overlayLayers, {
            collapsed: true,
            position: 'topright'
        }).addTo(map);
    });

    
    Object.values(layers).forEach(layer => layer.addTo(map));


    // Add category buttons to the map
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

    // Store layers globally for toggle functionality
    window.mapLayers = layers;

    // Add route control close button functionality
    document.getElementById('close-route').addEventListener('click', function() {
        if (routingControl) {
            map.removeControl(routingControl);
            routingControl = null;
            document.getElementById('route-control').classList.add('hidden');
        }
    });
}

routingControl.on('routesfound', function() {
    const container = document.querySelector('.leaflet-routing-container');
    if (container) {
        container.style.marginTop = '60px';
    }
});

// Create custom icon function
function createCustomIcon(emoji, color) {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">${emoji}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}

// Add markers to layer with custom icons
function addMarkersToLayer(places, layer, icon) {
    places.forEach(place => {
        const marker = L.marker([place.lat, place.lng], { icon: icon }).addTo(layer);
        
        const popupContent = `
            <div class="popup-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <p>Buka Jam:${place.opening_hours}</p>
                <p>Harga Masuk: ${place.ticket_price}</p>
                <p>Fasilitas: ${place.facilities}</p>
                <button class="btn-route" onclick="createRoute(${place.lat}, ${place.lng})">
                    Lihat Rute
                </button>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
}




// Show specific category
function showCategory(category) {
    // Update active button
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains(category)) {
            btn.classList.add('active');
        }
    });

    // Show/hide layers based on category
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
    }

    activeCategory = category;
}

// Create route from user location to destination
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
    
    document.getElementById('route-control').classList.remove('hidden');
}

// Initialize navigation (mobile menu toggle)
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

// Initialize contact form
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
