var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LOTES_POLIGONO_1 = new ol.format.GeoJSON();
var features_LOTES_POLIGONO_1 = format_LOTES_POLIGONO_1.readFeatures(json_LOTES_POLIGONO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTES_POLIGONO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTES_POLIGONO_1.addFeatures(features_LOTES_POLIGONO_1);
var lyr_LOTES_POLIGONO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTES_POLIGONO_1, 
                style: style_LOTES_POLIGONO_1,
                popuplayertitle: 'LOTES_POLIGONO',
                interactive: true,
                title: '<img src="styles/legend/LOTES_POLIGONO_1.png" /> LOTES_POLIGONO'
            });
var format_puntos_2 = new ol.format.GeoJSON();
var features_puntos_2 = format_puntos_2.readFeatures(json_puntos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_2.addFeatures(features_puntos_2);
var lyr_puntos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntos_2, 
                style: style_puntos_2,
                popuplayertitle: 'puntos',
                interactive: true,
                title: '<img src="styles/legend/puntos_2.png" /> puntos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LOTES_POLIGONO_1.setVisible(true);lyr_puntos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LOTES_POLIGONO_1,lyr_puntos_2];
lyr_LOTES_POLIGONO_1.set('fieldAliases', {'NÚMERO DE': 'NÚMERO DE', 'ROL': 'ROL', 'SUBDIVISIO': 'SUBDIVISIO', 'COMUNA': 'COMUNA', });
lyr_puntos_2.set('fieldAliases', {'NAME': 'NAME', });
lyr_LOTES_POLIGONO_1.set('fieldImages', {'NÚMERO DE': '', 'ROL': '', 'SUBDIVISIO': '', 'COMUNA': '', });
lyr_puntos_2.set('fieldImages', {'NAME': '', });
lyr_LOTES_POLIGONO_1.set('fieldLabels', {'NÚMERO DE': 'inline label - always visible', 'ROL': 'inline label - always visible', 'SUBDIVISIO': 'inline label - always visible', 'COMUNA': 'inline label - always visible', });
lyr_puntos_2.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_puntos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});