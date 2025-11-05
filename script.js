mapboxgl.accessToken = 'pk.eyJ1IjoiemR0aG9ycGUiLCJhIjoiY21oOXJsZ3k2MDI1cTJqcHR2NzdxNG1iNSJ9.HDSvKUcu-EXhcEwoTeWwQA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/zdthorpe/cmh9rqydu000001so3rf94dau', // your Style URL goes here
  center: [-122.269, 37.874], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 13 // starting zoom
    });

map.on('load', function() {
    map.addSource('points-data', {
      type: 'geojson',
      data: 'https://raw.githubusercontent.com/zdthorpe/BAHA-Map/refs/heads/main/data/webmap.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
          }
    });

    map.on('click', 'points-layer', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;

            const popupContent = `
              <div>
                  <h3>${properties.Name}</h3>
                  <p><strong>Address:</strong> ${properties.Address}</p>
                  <p><strong>Architect & Date:</strong> ${properties.Architect}</p>
                  <p><strong>Designated:</strong> ${properties.Designated}</p>
                  ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                  ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
              </div>
            `;

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(popupContent)
              .addTo(map);
    });
    // Change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    // Change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
      map.getCanvas().style.cursor = '';
    });

});
