mapboxgl.accessToken = 'pk.eyJ1IjoiemR0aG9ycGUiLCJhIjoiY21oOXJsZ3k2MDI1cTJqcHR2NzdxNG1iNSJ9.HDSvKUcu-EXhcEwoTeWwQA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/zdthorpe/cmh9rqydu000001so3rf94dau', // your Style URL goes here
  center: [14.414212, 50.088913], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 15 // starting zoom
    });