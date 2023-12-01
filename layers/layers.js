var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);
var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                interactive: true,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });
var format_TandesLakardissolved_2 = new ol.format.GeoJSON();
var features_TandesLakardissolved_2 = format_TandesLakardissolved_2.readFeatures(json_TandesLakardissolved_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TandesLakardissolved_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TandesLakardissolved_2.addFeatures(features_TandesLakardissolved_2);
var lyr_TandesLakardissolved_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TandesLakardissolved_2, 
                style: style_TandesLakardissolved_2,
                interactive: true,
                title: '<img src="styles/legend/TandesLakardissolved_2.png" /> Tandes & Lakar — dissolved'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_TandesLakardissolved_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_JALAN_1,lyr_TandesLakardissolved_2];
lyr_JALAN_1.set('fieldAliases', {'id': 'id', });
lyr_TandesLakardissolved_2.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_1.set('fieldImages', {'id': 'TextEdit', });
lyr_TandesLakardissolved_2.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_1.set('fieldLabels', {'id': 'no label', });
lyr_TandesLakardissolved_2.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TandesLakardissolved_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});