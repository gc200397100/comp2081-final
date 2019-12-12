const ACCESS_TOKEN = "pk.eyJ1IjoiZWptYW5uIiwiYSI6ImNrM2htNG56NTBlYnQzZHFkbDZnazFxdW4ifQ.Rlmi60wikd7fps0UvPjApQ"

function map() {
	console.log("map")
	var mymap = L.map('mapid').setView([44.388, -79.690], 17);

	L.tileLayer(
		`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${ACCESS_TOKEN}`, {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'your.mapbox.access.token'
	}).addTo(mymap);

	//place marker
	var marker = L.marker([44.388672, -79.690919]).addTo(mymap);
}

map();

