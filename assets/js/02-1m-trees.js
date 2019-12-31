import LatLon from "https://cdn.jsdelivr.net/npm/geodesy@2.2.0/latlon-spherical.min.js";

// Create a map centred on Crickhowell
const map = L.map("mapid").setView([51.8597, -3.1372], 10);

// Use Open Street Map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Show Brecon Beacons National Park boundary
const bbnpLayer = omnivore
  .kml("/assets/kml/brecon_beacons_national_park_boundary.kml")
  .on("ready", function() {
    map.fitBounds(bbnpLayer.getBounds());
  })
  .addTo(map);

// Draw a square with area 1000 acres
const areaInSqKm = 4.04686;
const sideInM = Math.sqrt(areaInSqKm * 1000 * 1000);
const p1 = new LatLon(51.87479531230165, -3.1503295898437504); // point north of Crickhowell
const p2 = p1.destinationPoint(sideInM, 0);
const p3 = p2.destinationPoint(sideInM, 90);
const p4 = p1.destinationPoint(sideInM, 90);

const square = L.polygon(
  [
    [p1.lat, p1.lon],
    [p2.lat, p2.lon],
    [p3.lat, p3.lon],
    [p4.lat, p4.lon]
  ],
  {
    color: "green",
    fillOpacity: 0.5
  }
).addTo(map);

const popup = L.popup()
  .setLatLng(p2.midpointTo(p3))
  .setContent("<p>Area needed to plant 1 million trees</p>")
  .openOn(map);
