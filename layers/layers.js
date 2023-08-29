var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ContourPNRVN_1 = new ol.format.GeoJSON();
var features_ContourPNRVN_1 = format_ContourPNRVN_1.readFeatures(json_ContourPNRVN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourPNRVN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourPNRVN_1.addFeatures(features_ContourPNRVN_1);
var lyr_ContourPNRVN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourPNRVN_1, 
                style: style_ContourPNRVN_1,
                interactive: true,
                title: '<img src="styles/legend/ContourPNRVN_1.png" /> Contour PNRVN'
            });
var format_Coutourezonetude_2 = new ol.format.GeoJSON();
var features_Coutourezonetude_2 = format_Coutourezonetude_2.readFeatures(json_Coutourezonetude_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coutourezonetude_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coutourezonetude_2.addFeatures(features_Coutourezonetude_2);
var lyr_Coutourezonetude_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coutourezonetude_2, 
                style: style_Coutourezonetude_2,
                interactive: true,
                title: '<img src="styles/legend/Coutourezonetude_2.png" /> Coutoure zone étude'
            });
var format_New_3 = new ol.format.GeoJSON();
var features_New_3 = format_New_3.readFeatures(json_New_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_New_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_3.addFeatures(features_New_3);
var lyr_New_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_New_3, 
                style: style_New_3,
                interactive: true,
                title: '<img src="styles/legend/New_3.png" /> New'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_ContourPNRVN_1.setVisible(true);lyr_Coutourezonetude_2.setVisible(true);lyr_New_3.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_ContourPNRVN_1,lyr_Coutourezonetude_2,lyr_New_3];
lyr_ContourPNRVN_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'insee_2': 'insee_2', 'nom_2': 'nom_2', 'wikipedia_': 'wikipedia_', 'surf_ha_2': 'surf_ha_2', 'insee_3': 'insee_3', 'nom_3': 'nom_3', 'wikipedi_1': 'wikipedi_1', 'surf_ha_3': 'surf_ha_3', 'insee_2_2': 'insee_2_2', 'nom_2_2': 'nom_2_2', 'wikipedi_2': 'wikipedi_2', 'surf_ha_2_': 'surf_ha_2_', });
lyr_Coutourezonetude_2.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'insee_2': 'insee_2', 'nom_2': 'nom_2', 'wikipedia_': 'wikipedia_', 'surf_ha_2': 'surf_ha_2', 'insee_3': 'insee_3', 'nom_3': 'nom_3', 'wikipedi_1': 'wikipedi_1', 'surf_ha_3': 'surf_ha_3', 'insee_2_2': 'insee_2_2', 'nom_2_2': 'nom_2_2', 'wikipedi_2': 'wikipedi_2', 'surf_ha_2_': 'surf_ha_2_', 'insee_4': 'insee_4', 'nom_4': 'nom_4', 'wikipedi_3': 'wikipedi_3', 'surf_ha_4': 'surf_ha_4', 'insee_2_3': 'insee_2_3', 'nom_2_3': 'nom_2_3', 'wikipedi_4': 'wikipedi_4', 'surf_ha__1': 'surf_ha__1', 'insee_3_2': 'insee_3_2', 'nom_3_2': 'nom_3_2', 'wikipedi_5': 'wikipedi_5', 'surf_ha_3_': 'surf_ha_3_', 'insee_2_2_': 'insee_2_2_', 'nom_2_2_2': 'nom_2_2_2', 'wikipedi_6': 'wikipedi_6', 'surf_ha__2': 'surf_ha__2', });
lyr_New_3.set('fieldAliases', {'Nom du sit': 'Nom du sit', 'Coordonnee': 'Coordonnee', 'field_4': 'field_4', 'Commune': 'Commune', 'Descriptio': 'Descriptio', 'Indiquatio': 'Indiquatio', 'Degradatio': 'Degradatio', 'Valeur geo': 'Valeur geo', 'Photo': 'Photo', });
lyr_ContourPNRVN_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'insee_2': 'TextEdit', 'nom_2': 'TextEdit', 'wikipedia_': 'TextEdit', 'surf_ha_2': 'TextEdit', 'insee_3': 'TextEdit', 'nom_3': 'TextEdit', 'wikipedi_1': 'TextEdit', 'surf_ha_3': 'TextEdit', 'insee_2_2': 'TextEdit', 'nom_2_2': 'TextEdit', 'wikipedi_2': 'TextEdit', 'surf_ha_2_': 'TextEdit', });
lyr_Coutourezonetude_2.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'insee_2': 'TextEdit', 'nom_2': 'TextEdit', 'wikipedia_': 'TextEdit', 'surf_ha_2': 'TextEdit', 'insee_3': 'TextEdit', 'nom_3': 'TextEdit', 'wikipedi_1': 'TextEdit', 'surf_ha_3': 'TextEdit', 'insee_2_2': 'TextEdit', 'nom_2_2': 'TextEdit', 'wikipedi_2': 'TextEdit', 'surf_ha_2_': 'TextEdit', 'insee_4': 'TextEdit', 'nom_4': 'TextEdit', 'wikipedi_3': 'TextEdit', 'surf_ha_4': 'TextEdit', 'insee_2_3': 'TextEdit', 'nom_2_3': 'TextEdit', 'wikipedi_4': 'TextEdit', 'surf_ha__1': 'TextEdit', 'insee_3_2': 'TextEdit', 'nom_3_2': 'TextEdit', 'wikipedi_5': 'TextEdit', 'surf_ha_3_': 'TextEdit', 'insee_2_2_': 'TextEdit', 'nom_2_2_2': 'TextEdit', 'wikipedi_6': 'TextEdit', 'surf_ha__2': 'TextEdit', });
lyr_New_3.set('fieldImages', {'Nom du sit': 'TextEdit', 'Coordonnee': 'TextEdit', 'field_4': 'TextEdit', 'Commune': 'TextEdit', 'Descriptio': 'TextEdit', 'Indiquatio': 'TextEdit', 'Degradatio': 'TextEdit', 'Valeur geo': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_ContourPNRVN_1.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'insee_2': 'no label', 'nom_2': 'no label', 'wikipedia_': 'no label', 'surf_ha_2': 'no label', 'insee_3': 'no label', 'nom_3': 'no label', 'wikipedi_1': 'no label', 'surf_ha_3': 'no label', 'insee_2_2': 'no label', 'nom_2_2': 'no label', 'wikipedi_2': 'no label', 'surf_ha_2_': 'no label', });
lyr_Coutourezonetude_2.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'insee_2': 'no label', 'nom_2': 'no label', 'wikipedia_': 'no label', 'surf_ha_2': 'no label', 'insee_3': 'no label', 'nom_3': 'no label', 'wikipedi_1': 'no label', 'surf_ha_3': 'no label', 'insee_2_2': 'no label', 'nom_2_2': 'no label', 'wikipedi_2': 'no label', 'surf_ha_2_': 'no label', 'insee_4': 'no label', 'nom_4': 'no label', 'wikipedi_3': 'no label', 'surf_ha_4': 'no label', 'insee_2_3': 'no label', 'nom_2_3': 'no label', 'wikipedi_4': 'no label', 'surf_ha__1': 'no label', 'insee_3_2': 'no label', 'nom_3_2': 'no label', 'wikipedi_5': 'no label', 'surf_ha_3_': 'no label', 'insee_2_2_': 'no label', 'nom_2_2_2': 'no label', 'wikipedi_6': 'no label', 'surf_ha__2': 'no label', });
lyr_New_3.set('fieldLabels', {'Nom du sit': 'header label', 'Coordonnee': 'no label', 'field_4': 'no label', 'Commune': 'no label', 'Descriptio': 'inline label', 'Indiquatio': 'inline label', 'Degradatio': 'inline label', 'Valeur geo': 'inline label', 'Photo': 'no label', });
lyr_New_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});