document.addEventListener("DOMContentLoaded", () => {
  var map = L.map('map').setView([40.6971494, -74], 11)
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1IjoiZmx4bWR5IiwiYSI6ImNqbHB4YnRxNjA2a3Izc3F3a2E5dWF2czYifQ.suDzu_w_2m97miGg1M3o3g'
    }).addTo(map);

  fetch("https://data.cityofnewyork.us/resource/mxmc-6x6d.json?rw_type=10&%24limit=20000")
    .then(res => res.json())
    .then(json => json.map(x => x.the_geom))
    .then(geoms => L.geoJSON(geoms).addTo(map))
    .catch(err => console.error('Error:', err))
})
