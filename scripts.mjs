// Import the necessary modules.
import { weatherTypes, windDirections, UKBounds, totalBounds } from "./constants.mjs";

const MBAT = '[YOUR MAPBOX KEY]';
const MET_OFFICE_DATA_POINT_API_KEY = '[YOU MET OFFICE DATA POINT KEY]'

// Set the initial map position and zoom level.
var startPos = [-2.3204513181824584, 53.80543669141514],
    map,
    liveUrl = "http://localhost:8080/",
    factor = 110,
    weatherData = [],
    linesArr = [];

// Set the wind lines to move by default
var animate = true;

// Add event listeners to the document.
$(document).ready(async function () {
    mapboxgl.accessToken = MBAT;

    // Create the map.
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/rsrc1147/cl08rlyav000914nwdeavzvy0',
        center: startPos,
        zoom: 6,
    });

    // Add event listeners to the map.
    map.on('load', async () => {

        // Load the weather icons.
        for (var i = 0; i < weatherTypes.length; i++) {
            loadWeatherImage(weatherTypes[i], i);
        }

        // Add the source layers to the map.
        map.addSource("polySource_", { // TEMPERATURE POLYGONS
            'type': 'geojson',
            'data': {
                "type": "FeatureCollection",
                "features": []
            }
        });

        map.addSource('windData', { // WIND LINES
            'type': 'geojson',
            'data': {
                "type": "FeatureCollection",
                "features": []
            }
        });
        map.addSource("pinSource_", { // WEATHER INFO ICONS
            'type': 'geojson',
            'data': {
                "type": "FeatureCollection",
                "features": []
            }
        });

        // Add the layer styles to the map.
        map.addLayer({ // ANIMATED WIND
            'id': 'wind',
            'type': 'line',
            'source': 'windData',
            'layout': {
                'line-join': 'round',
                'line-cap': 'square'
            },
            'paint': {
                'line-color': '#536872',
                'line-width': ['get', 'windSpeedWidth'],
                'line-blur': ['get', 'blur']
            }
        });
        map.addLayer({ // WEATHER INFO ICONS
            'id': 'pinLayer_',
            'type': 'symbol',
            'source': 'pinSource_',
            'layout': {
                "icon-image": ['get', 'weatherIcon'],
                'text-field': ['get', 'weatherReport'],
                'text-font': [
                    'Open Sans Semibold',
                    'Arial Unicode MS Bold'
                ],
                'text-offset': [0, 0.6],
                'text-anchor': 'top',
                "text-size": 10
            }
        });
        map.addLayer({ // TEMPERATURE POLYGONS
            'id': 'polyLayer_',
            'type': 'fill',
            'source': 'polySource_',
            'paint': {
                'fill-color': ['get', 'colour'],
                'fill-opacity': 0.35
            }
        });

        // Get the current weather observations (fast).
        getData('observation').then(d => {
            // Draw the weather data on the map for the current time.
            drawData(moment().startOf('hour').format('llll'));
            // Now get the forecatss (slow)
            getData('forecast').then(() => {
                makeDateSlider();
            })
        })
    });
})

// Get the weather data from the server.
function getData(type) {
    return new Promise(function (resolve, reject) {
        fetch('http://datapoint.metoffice.gov.uk/public/data/val/'+(type == "observation" ? 'wxobs/all/json/all?res=' : 'wxfcs/all/json/all?res=3')+'hourly&key=' + MET_OFFICE_DATA_POINT_API_KEY,{
            method: 'get'
        }).then(response => response.json()).then(d => {
            weatherData.push(...makePoints(d.SiteRep.DV.Location.filter(function(value, index, Arr) {
                // Weather Forecasts have a lot of points so we need to filter them down a little. You can change the number of points you want by changing 5 to something else
                return (type == "observation" ? true : index % 5 == 0);
            }), type));
            return resolve()
        })
    })
}

// Make the points for the weather data.
function makePoints(locations, type) {
    var pointArr = [];
    for (var l of locations) {
        if (!l.lat || !l.lon || !l.Period || !Array.isArray(l.Period)) return false;
        var tPoint = turf.point([l.lon * 1, l.lat * 1], { name: l.name });
        for (var day of l.Period) {
            for (var i = 0; i < day.Rep.length; i++) {
                var hour = day.Rep[i];
                var tTime = moment(day.value).add((type == 'forecast' ? i * 3 : i), 'hours')
                var tProp = { time: tTime.format('llll') }
                tProp.temperature = hour.T * 1;
                tProp.weather = (weatherTypes[hour.W] ? weatherTypes[hour.W].name : "");
                tProp.windDirection = (hour.D && windDirections[hour.D] ? windDirections[hour.D] : false);
                tProp.windSpeed = (hour.S ? hour.S * 1 : 0);
                tProp.weatherIcon = 'w_' + hour.W;
                tProp.windSpeedWidth = tProp.windSpeed / 5
                tProp.blur = 0;
                tProp.type = type;
                tProp.alwaysOn = true, // This is to ensure these don't get randomly hidden like the grid ones do (see below)
                    tProp.weatherReport = `
                    ${tProp.temperature}ºC
                    ${tProp.windSpeed} ${hour.D}
                `
                tPoint.properties[tTime.format('llll')] = tProp
            }
        }
        pointArr.push(tPoint);
    }
    return pointArr;
}

// Draw the weather data on the map.
function drawData(day) {
    linesArr = [];
    // Set the bounds for interpolation
    const topLeft = turf.point(totalBounds[1]);
    const topRight = turf.point([totalBounds[0][0], totalBounds[1][1]]);
    const viewPortDistance = turf.distance(topLeft, topRight, { units: 'miles' })

    // Create a dataset to interpolate from
    var pointArr = [
        // Hack because Norfolk gets cut off for some reason so we add in an extra fake measurement off the east coast
        turf.point([1.8660270313439817, 52.766349947635035], {
            windDirection: 0,     //NEED TO MAKE THIS AVERAGE
            windSpeed: 0,        //NEED TO MAKE THIS AVERAGE
            temperature: 0       //NEED TO MAKE THIS AVERAGE
        })
    ];

    // Add any points where we have data for the given time and day
    for (var p of weatherData) {
        if (p.properties[day]) {
            pointArr.push(turf.point(p.geometry.coordinates, p.properties[day]))
        }
    }

    // Add the weather icons onto the map
    map.getSource('pinSource_').setData({
        "type": "FeatureCollection",
        "features": pointArr
    });

    // Do the interpolations
    // Interpolate wind speed
    var speedGrid = turf.interpolate(turf.featureCollection(pointArr), viewPortDistance / factor, { gridType: 'points', property: 'windSpeed', units: 'miles' });
    // Interpolate wind direction
    var directionGrid = turf.interpolate(turf.featureCollection(pointArr), viewPortDistance / factor, { gridType: 'points', property: 'windDirection', units: 'miles' });
    // Interpolate temperature
    var temperatureGrid = turf.interpolate(turf.featureCollection(pointArr), viewPortDistance / (factor * 6), { gridType: 'hex', property: 'temperature', units: 'miles' });

    // Set the colours of the hexagons based on the temperature
    for (var f of temperatureGrid.features) {
        f.properties.colour = getColour(f.properties.temperature)
    }

    // Add the temperature hexagon layer
    map.getSource('polySource_').setData({
        "type": "FeatureCollection",
        "features": temperatureGrid.features.filter(f => turf.booleanWithin(f, UKBounds))
    })

    // Match the interpolated speed grid points with the interpolated wind direction points to combine the interpolated data
    for (var sf of speedGrid.features) {
        var tdf = directionGrid.features.find(df => df.geometry.coordinates[0] == sf.geometry.coordinates[0] && df.geometry.coordinates[1] == sf.geometry.coordinates[1]);
        tdf.properties.windSpeed = sf.properties.windSpeed;
        tdf.properties.windSpeedWidth = sf.properties.windSpeed / 5;
        tdf.properties.blur = 0;
    }

    // Add all the actual weather station points to the interpolated point array so we have real data as well as interpolated data.
    // directionGrid.features.push(...pointArr);

    // Create wind lines from grid
    for (var df of directionGrid.features) {
        // create a second point from the grid point based on wind direction. 
        // The length is a factor of the interpolation width and some randomness to ensure not everything redraws at the same time.
        var tDest = turf.destination(df, (viewPortDistance / factor) * Math.floor(Math.random() * 7), df.properties.windDirection);
        // Get the start point from the grid, the end point from above and create a number of lat lngs in between those two points
        var startPoint = df.geometry.coordinates,
            endPoint = tDest.geometry.coordinates,
            speedFactor = df.properties.windSpeed * 15; // More than 15 slows the wind down, less speeds the wind up
        var diffX = endPoint[0] - startPoint[0],
            diffY = endPoint[1] - startPoint[1];
        var sfX = diffX / speedFactor,
            sfY = diffY / speedFactor;
        var coordArr = [],
            i = 0,
            j = 0;

        // Create an array of coordinates to build the line from
        while (i < diffX || Math.abs(j) < Math.abs(diffY)) {
            coordArr.push([startPoint[0] + i, startPoint[1] + j]);
            if (i < diffX) {
                i += sfX;
            }
            if (Math.abs(j) < Math.abs(diffY)) {
                j += sfY;
            }
        }

        //If it is east > west the line needs to build the other way so we reverse the coordinates.
        if (endPoint[0] - startPoint[0] < 0) coordArr.reverse()

        // Add our new wind line to the global linesArr for animating
        linesArr.push({
            animationCounter: 0,
            lineCoordinates: coordArr,
            windSpeed: speedFactor,
            showMe: Math.random() > 0.65,
            lineString: {
                "type": "Feature",
                "properties": df.properties,
                "geometry": {
                    "type": "LineString",
                    "coordinates": []
                }
            }
        })
    }

    // Start the animation
    animateLine();
}

// Animate the wind lines.
function animateLine() {
    // Create an array of lines we will actually show on the map
    var geojson = [];
    if(animate){
        for (var l of linesArr) {
            // If the line is alredy being drawn or if this is the first time animating the lines.
            // The randomness is important to stop all the line showing at the same time at the same framerate on load which looks weird.
            if (l.lineString.geometry.coordinates.length > 0 || Math.random() > 0.85) { // change 0.85 to make it more or less likely to show it
                if (l.animationCounter < l.lineCoordinates.length) { // The line is getting longer
                    l.lineString.properties.blur += 0.05
                    l.lineString.geometry.coordinates.push(l.lineCoordinates[l.animationCounter]);
                    if (l.animationCounter > 80) l.lineString.geometry.coordinates.shift() // Cut the tail off it to make the animation a bit smoother
                    l.animationCounter++;
                } else { // The line is getting shorter
                    l.lineString.properties.blur += 0.5
                    var coord = l.lineString.geometry.coordinates;
                    coord.shift();
                    if (coord.length > 0) {
                        l.lineString.geometry.coordinates = coord
                    } else { // The line has finished its cycle. Reset the blur and counter
                        l.lineString.properties.blur = 0;
                        l.animationCounter = 0;
                        l.showMe = l.lineString.properties.alwaysOn || Math.random() > 0.7; // Decide whether we are going to show the line or not next time it draws
                    }
                }
            }
        }
    
        // Update the wind lines source with the showable lines
        map.getSource('windData').setData({
            "type": "FeatureCollection",
            "features": linesArr.filter(l => l.showMe).map(l => l.lineString)
        });
        requestAnimationFrame(animateLine);
    }
}

// Load the weather icons.
function loadWeatherImage(w, i) {
    var img = new Image(40, 40)
    img.onload = () => {
        map.addImage('w_' + i, img);
    }
    img.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(w.icon)}`;
}

// Get the colour for the temperature.
function getColour(temperature) {
    var colours = [
        { colour: "#ff0303", temp: 36 },
        { colour: "#fa5000", temp: 33 },
        { colour: "#f07600", temp: 30 },
        { colour: "#df9600", temp: 27 },
        { colour: "#cab100", temp: 24 },
        { colour: "#afca00", temp: 21 },
        { colour: "#8ce100", temp: 18 },
        { colour: "#55f633", temp: 15 },
        { colour: "#00e368", temp: 12 },
        { colour: "#00cd91", temp: 9 },
        { colour: "#00b5b4", temp: 6 },
        { colour: "#009ccc", temp: 3 },
        { colour: "#0082d7", temp: 0 },
        { colour: "#0068d1", temp: -3 },
        { colour: "#004bbc", temp: -6 },
        { colour: "#002c99", temp: -9 },
        { colour: "#0f006c", temp: -12 }
    ]
    var temp = colours.reduce(function (prev, curr) {
        return (Math.abs(curr.temp - temperature) < Math.abs(prev.temp - temperature) ? curr : prev);
    });

    return temp.colour;

}

// Make the date slider that allows the user to change which forecast or observation they are looking at
function makeDateSlider() {
    var dates = [];
    for (var p of weatherData) {
        for (var d in p.properties) {
            dates.push(moment(d))
        }
    }
    var sortedDates = [...new Set(dates.sort((a, b) => a.diff(b)).map(d => d.format('llll')))].filter(d => d != "Invalid date")
    var tDate = sortedDates.indexOf(moment().startOf('hour').format('llll'))
    var handle = $( "#custom-handle" );
    handle.text(sortedDates[tDate])
    handle.show();
    $("#slide").slider({
        min: 0,
        max: sortedDates.length - 1,
        value: tDate,
        slide:function(event, ui){
            animate = false;
            handle.html(sortedDates[ui.value])
        },
        stop: function(event, ui) {
            handle.text('<i class="fas fa-spinner fa-pulse"></i>')
            drawData(sortedDates[ui.value])
            handle.text(sortedDates[ui.value])
            animate = true;
            animateLine();
        }
    });
}
