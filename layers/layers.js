var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PDUCP_PATZCUARO_ZONIF_SEC_900913_1 = new ol.format.GeoJSON();
var features_PDUCP_PATZCUARO_ZONIF_SEC_900913_1 = format_PDUCP_PATZCUARO_ZONIF_SEC_900913_1.readFeatures(json_PDUCP_PATZCUARO_ZONIF_SEC_900913_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDUCP_PATZCUARO_ZONIF_SEC_900913_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDUCP_PATZCUARO_ZONIF_SEC_900913_1.addFeatures(features_PDUCP_PATZCUARO_ZONIF_SEC_900913_1);
var lyr_PDUCP_PATZCUARO_ZONIF_SEC_900913_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDUCP_PATZCUARO_ZONIF_SEC_900913_1, 
                style: style_PDUCP_PATZCUARO_ZONIF_SEC_900913_1,
                popuplayertitle: 'PDUCP_PATZCUARO_ZONIF_SEC_900913',
                interactive: true,
                title: '<img src="styles/legend/PDUCP_PATZCUARO_ZONIF_SEC_900913_1.png" /> PDUCP_PATZCUARO_ZONIF_SEC_900913'
            });
var format_Direccion_geocodificada_2 = new ol.format.GeoJSON();
var features_Direccion_geocodificada_2 = format_Direccion_geocodificada_2.readFeatures(json_Direccion_geocodificada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Direccion_geocodificada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Direccion_geocodificada_2.addFeatures(features_Direccion_geocodificada_2);
cluster_Direccion_geocodificada_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Direccion_geocodificada_2
});
var lyr_Direccion_geocodificada_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Direccion_geocodificada_2, 
                style: style_Direccion_geocodificada_2,
                popuplayertitle: 'Direccion_geocodificada',
                interactive: true,
                title: 'Direccion_geocodificada'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_PDUCP_PATZCUARO_ZONIF_SEC_900913_1.setVisible(true);lyr_Direccion_geocodificada_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PDUCP_PATZCUARO_ZONIF_SEC_900913_1,lyr_Direccion_geocodificada_2];
lyr_PDUCP_PATZCUARO_ZONIF_SEC_900913_1.set('fieldAliases', {'ZONIF_PRIM': 'ZONIF_PRIM', 'CVE_PRIM': 'CVE_PRIM', 'AREA': 'AREA', 'PLAZO': 'PLAZO', 'ZONIF_SEC': 'ZONIF_SEC', 'CVE_SEC': 'CVE_SEC', 'DENSIDAD': 'DENSIDAD', });
lyr_Direccion_geocodificada_2.set('fieldAliases', {'Nombre': 'Nombre', 'Apellido': 'Apellido', 'Estado': 'Estado', 'Calle_1': 'Calle_1', 'Calle_2': 'Calle_2', 'País': 'País', 'CP': 'CP', 'Municipio': 'Municipio', 'Direccion': 'Direccion', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Nivel_precision': 'Nivel_precision', 'Observaciones': 'Observaciones', });
lyr_PDUCP_PATZCUARO_ZONIF_SEC_900913_1.set('fieldImages', {'ZONIF_PRIM': 'TextEdit', 'CVE_PRIM': 'TextEdit', 'AREA': 'TextEdit', 'PLAZO': 'TextEdit', 'ZONIF_SEC': 'TextEdit', 'CVE_SEC': 'TextEdit', 'DENSIDAD': 'TextEdit', });
lyr_Direccion_geocodificada_2.set('fieldImages', {'Nombre': 'TextEdit', 'Apellido': 'TextEdit', 'Estado': 'TextEdit', 'Calle_1': 'TextEdit', 'Calle_2': 'TextEdit', 'País': 'TextEdit', 'CP': 'Range', 'Municipio': 'TextEdit', 'Direccion': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Nivel_precision': 'TextEdit', 'Observaciones': 'TextEdit', });
lyr_PDUCP_PATZCUARO_ZONIF_SEC_900913_1.set('fieldLabels', {'ZONIF_PRIM': 'no label', 'CVE_PRIM': 'no label', 'AREA': 'no label', 'PLAZO': 'no label', 'ZONIF_SEC': 'no label', 'CVE_SEC': 'no label', 'DENSIDAD': 'no label', });
lyr_Direccion_geocodificada_2.set('fieldLabels', {'Nombre': 'no label', 'Apellido': 'no label', 'Estado': 'no label', 'Calle_1': 'no label', 'Calle_2': 'no label', 'País': 'no label', 'CP': 'no label', 'Municipio': 'no label', 'Direccion': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Nivel_precision': 'no label', 'Observaciones': 'no label', });
lyr_Direccion_geocodificada_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});