document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('main-image');
    const infoWindow = document.getElementById('info-window');
    const closeBtn = document.getElementById('close-btn');
    const infoContent = document.getElementById('info-content');

    // Define points of interest
    const pointsOfInterest = [
        {
            x: 300, // X coordinate on the image
            y: 200, // Y coordinate on the image
            content: "<h3>Communauté Affectée par EACOP</h3><p>Description de l'impact sur cette communauté...</p>"
        },
        {
            x: 600,
            y: 400,
            content: "<h3>Énergies Renouvelables en Afrique</h3><p>Informations sur les énergies renouvelables...</p>"
        }
    ];

    // Add markers to the image
    pointsOfInterest.forEach(point => {
        const marker = document.createElement('div');
        marker.classList.add('marker');
        marker.style.left = `${point.x}px`;
        marker.style.top = `${point.y}px`;
        image.parentElement.appendChild(marker);

        marker.addEventListener('click', () => {
            showInfoWindow(point.content, point.x, point.y);
        });
    });

    // Function to show the info window
    function showInfoWindow(content, x, y) {
        infoContent.innerHTML = content;
        infoWindow.style.left = `${x}px`;
        infoWindow.style.top = `${y}px`;
        infoWindow.classList.remove('hide');
        infoWindow.classList.add('show');
    }

    // Function to hide the info window
    function hideInfoWindow() {
        infoWindow.classList.remove('show');
        infoWindow.classList.add('hide');
    }

    // Event listener for closing the info window
    closeBtn.addEventListener('click', hideInfoWindow);

    // Hide the info window when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!infoWindow.contains(event.target) && !event.target.classList.contains('marker')) {
            hideInfoWindow();
        }
    });
});
