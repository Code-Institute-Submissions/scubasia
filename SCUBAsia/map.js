

 //Initialize the map with the OpenStreetMap Belgium baselayer
 var attribution = new ol.control.Attribution({
     collapsible: false
 });

 var map = new ol.Map({
     controls: ol.control.defaults({attribution: false}).extend([attribution]),
     layers: [
         new ol.layer.Tile({
             source: new ol.source.OSM({
                 url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                 attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                 maxZoom: 10
             })
         })
     ],
     target: 'map',
     view: new ol.View({
         center: ol.proj.fromLonLat([119.2397, 18.1997]),
         maxZoom: 10,
         zoom: 3
     })
 });

 //Add marker
 // Sipidan [118.6287, 4.1150]
 //Siwa Reef [113.89813765883, 4.485162555556]
 //Okinawa [127.8056, 26.3344]
 //Shireteko [145.2397, 44.1997]
 //Geko Dive Bali [115.188919, -8.409518]
 //The Great Barrier Reef [147.6992, 18.2871]

 // Sipidan [118.6287, 4.1150]
 var layer = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([118.6287, 4.1150]))
                   
             })
         ]
     })
 });
 map.addLayer(layer);

 //Pulau Redang [103.0069, 5.7844]
 var layer2 = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([103.0069, 5.7844]))
                 
             })
         ]
     })
 });
 map.addLayer(layer2);


 //Siwa Reef [113.89813765883, 4.485162555556]
 var layer3 = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([113.89813765883, 4.485162555556]))
                 
             })
         ]
     })
 });
 map.addLayer(layer3);

 //Okinawa [127.8056, 26.3344]
  var layer4 = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([127.8056, 26.3344]))
                 
             })
         ]
     })
 });
 map.addLayer(layer4);


 //Shireteko [145.2397, 44.1997]
 var layer5 = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([145.2397, 44.1997]))
                 
             })
         ]
     })
 });
 map.addLayer(layer5);

 
 //Geko Dive Bali [115.188919, -8.409518]
 var layer6 = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([115.188919, -8.409518]))
                 
             })
         ]
     })
 });
 map.addLayer(layer6);

 //The Great Barrier Reef [147.6992, 18.2871]
 var layer7 = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [
             new ol.Feature({
                 geometry: new ol.geom.Point(ol.proj.fromLonLat([147.6992, -18.156290]))
                 
             })
         ]
     })
 });
 map.addLayer(layer7);


 //Initialise pop-up
 var container = document.getElementById('popup');
 var content = document.getElementById('popup-content');
 var closer = document.getElementById('popup-closer');

 var overlay = new ol.Overlay({
     element: container,
     autoPan: true,
     autoPanAnimation: {
         duration: 250
     }
 });
 map.addOverlay(overlay);


 //Customised pop up text after click, for multiple markers, and adding href links. To also display openstreenmaps coordinates to know map placement of text, use: content.innerHTML = '<a href="https://www.google.com.my/maps">SIPIDAN</a>' + coordinate;
 
 map.on('singleclick', function (event) {
     if (map.hasFeatureAtPixel(event.pixel) === true) {
         var coordinate = event.coordinate;

         if (coordinate[1].toPrecision(1) == 400000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">SIPIDAN</a>' + coordinate;
            overlay.setPosition(coordinate);
         } else if (coordinate[0].toPrecision(2) == 11000000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">REDANG</a>' + coordinate;
            overlay.setPosition(coordinate);

         } else if (coordinate[1].toPrecision(1) == -1000000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">Geko Dive Bali</a>' + coordinate;   
            overlay.setPosition(coordinate);

         } else if (coordinate[1].toPrecision(1) == 500000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">Siwa Reef</a>' + coordinate;   
            overlay.setPosition(coordinate);
         
         } else if (coordinate[1].toPrecision(1) == -2000000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">Great Barrier Reef</a>' + coordinate;   
            overlay.setPosition(coordinate);
         
         } else if (coordinate[1].toPrecision(1) == 3000000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">Okinawa</a>' + coordinate;   
            overlay.setPosition(coordinate);
         
         } else if (coordinate[1].toPrecision(1) == 3000000) {
            content.innerHTML = '<a href="https://www.google.com.my/maps">Shireteko</a>' + coordinate;   
            overlay.setPosition(coordinate);

         } 

     } else {
         overlay.setPosition(undefined);
         closer.blur();
     }
 });

