require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","dojo/domReady!"], function(Map,MapView, FeatureLayer) {
  var map = new Map({basemap: "topo-vector"});
  var view = new MapView({map: map,container: "viewDiv",zoom: 6,center: [-120.5542, 43.8041]});    
  const template = {title: "{name}",content: "Last Eruption: {last_erupt}<br/>Status: {status}."};
  
  var featureLayer_1 = new FeatureLayer({url:"https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/cascade_volcanoes/FeatureServer", popupTemplate: template});
  map.add(featureLayer_1);

  var featureLayer_2 = new FeatureLayer({url:"https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Park_Boundaries/FeatureServer"});
  map.add(featureLayer_2);
      
  var featureLayer_3 = new FeatureLayer({url:"https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/Tectonic_Plates/FeatureServer"});
  map.add(featureLayer_3);
      
  const temp = {title: "{name}",content: "Slip: {sliprate}mm/yr<br/>Age: {age}"};      
  var featureLayer_4 = new FeatureLayer({url:"https://services1.arcgis.com/qvhbYl7AOHUVqxij/ArcGIS/rest/services/Cascade_Volcanoes_and_Faults_WFL1/FeatureServer/1", popupTemplate: temp});
  map.add(featureLayer_4);});

      
