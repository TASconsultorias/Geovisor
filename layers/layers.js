var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_rm_1 = new ol.format.GeoJSON();
var features_rm_1 = format_rm_1.readFeatures(json_rm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rm_1.addFeatures(features_rm_1);
var lyr_rm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rm_1, 
                style: style_rm_1,
                popuplayertitle: 'rm',
                interactive: true,
                title: '<img src="styles/legend/rm_1.png" /> rm'
            });
var format_comunas_17_2 = new ol.format.GeoJSON();
var features_comunas_17_2 = format_comunas_17_2.readFeatures(json_comunas_17_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_17_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_17_2.addFeatures(features_comunas_17_2);
var lyr_comunas_17_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_17_2, 
                style: style_comunas_17_2,
                popuplayertitle: 'comunas_17',
                interactive: true,
                title: '<img src="styles/legend/comunas_17_2.png" /> comunas_17'
            });
var format_redhidro_17comunas_3 = new ol.format.GeoJSON();
var features_redhidro_17comunas_3 = format_redhidro_17comunas_3.readFeatures(json_redhidro_17comunas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redhidro_17comunas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redhidro_17comunas_3.addFeatures(features_redhidro_17comunas_3);
var lyr_redhidro_17comunas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_redhidro_17comunas_3, 
                style: style_redhidro_17comunas_3,
                popuplayertitle: 'redhidro_17comunas',
                interactive: true,
                title: '<img src="styles/legend/redhidro_17comunas_3.png" /> redhidro_17comunas'
            });
var format_inundaciones_4 = new ol.format.GeoJSON();
var features_inundaciones_4 = format_inundaciones_4.readFeatures(json_inundaciones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inundaciones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inundaciones_4.addFeatures(features_inundaciones_4);
var lyr_inundaciones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inundaciones_4, 
                style: style_inundaciones_4,
                popuplayertitle: 'inundaciones',
                interactive: true,
                title: '<img src="styles/legend/inundaciones_4.png" /> inundaciones'
            });
var format_canales_17comunas_5 = new ol.format.GeoJSON();
var features_canales_17comunas_5 = format_canales_17comunas_5.readFeatures(json_canales_17comunas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canales_17comunas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canales_17comunas_5.addFeatures(features_canales_17comunas_5);
var lyr_canales_17comunas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_canales_17comunas_5, 
                style: style_canales_17comunas_5,
                popuplayertitle: 'canales_17comunas',
                interactive: true,
                title: '<img src="styles/legend/canales_17comunas_5.png" /> canales_17comunas'
            });
var format_ssr_17comunas_6 = new ol.format.GeoJSON();
var features_ssr_17comunas_6 = format_ssr_17comunas_6.readFeatures(json_ssr_17comunas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ssr_17comunas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ssr_17comunas_6.addFeatures(features_ssr_17comunas_6);
var lyr_ssr_17comunas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ssr_17comunas_6, 
                style: style_ssr_17comunas_6,
                popuplayertitle: 'ssr_17comunas',
                interactive: true,
                title: '<img src="styles/legend/ssr_17comunas_6.png" /> ssr_17comunas'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_rm_1.setVisible(true);lyr_comunas_17_2.setVisible(true);lyr_redhidro_17comunas_3.setVisible(true);lyr_inundaciones_4.setVisible(true);lyr_canales_17comunas_5.setVisible(true);lyr_ssr_17comunas_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_rm_1,lyr_comunas_17_2,lyr_redhidro_17comunas_3,lyr_inundaciones_4,lyr_canales_17comunas_5,lyr_ssr_17comunas_6];
lyr_rm_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'CUT_REG': 'CUT_REG', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', });
lyr_comunas_17_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_redhidro_17comunas_3.set('fieldAliases', {'id': 'id', 'cod_cuen': 'cod_cuen', 'cod_subc': 'cod_subc', 'cod_ssubc': 'cod_ssubc', 'nom_cuen': 'nom_cuen', 'nom_subc': 'nom_subc', 'nom_ssubc': 'nom_ssubc', 'strahler_n': 'strahler_n', 'nombre_bcn': 'nombre_bcn', 'tipo_bcn': 'tipo_bcn', 'nombre_mop': 'nombre_mop', 'tipo_mop': 'tipo_mop', 'direccion': 'direccion', 'shape_leng': 'shape_leng', 'ident': 'ident', });
lyr_inundaciones_4.set('fieldAliases', {'id': 'id', 'id_obs': 'id_obs', 'Obs': 'Obs', 'Comuna': 'Comuna', 'Origen': 'Origen', });
lyr_canales_17comunas_5.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'codcan': 'codcan', 'nomcan': 'nomcan', 'n_acciones': 'n_acciones', 'porc_reves': 'porc_reves', 'origen': 'origen', 'fuentehid': 'fuentehid', 'tipo_canal': 'tipo_canal', 'oua': 'oua', 'oua_tipo': 'oua_tipo', 'jv': 'jv', 'ou_id': 'ou_id', 'jv_id': 'jv_id', 'f_trazado': 'f_trazado', 'f_num_acc': 'f_num_acc', 'f_orign_fh': 'f_orign_fh', 'f_revest': 'f_revest', 'f_oua': 'f_oua', });
lyr_ssr_17comunas_6.set('fieldAliases', {'id': 'id', 'ID_IDE': 'ID_IDE', 'NOMBRE': 'NOMBRE', 'MXSITEID': 'MXSITEID', 'COD_REG': 'COD_REG', 'COD_COM': 'COD_COM', 'COD_PROV': 'COD_PROV', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'FUENTE': 'FUENTE', 'FECHA_ACTU': 'FECHA_ACTU', 'LEVANTAMIE': 'LEVANTAMIE', });
lyr_rm_1.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'CUT_REG': 'TextEdit', 'REGION': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_comunas_17_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_redhidro_17comunas_3.set('fieldImages', {'id': 'TextEdit', 'cod_cuen': 'TextEdit', 'cod_subc': 'TextEdit', 'cod_ssubc': 'TextEdit', 'nom_cuen': 'TextEdit', 'nom_subc': 'TextEdit', 'nom_ssubc': 'TextEdit', 'strahler_n': 'TextEdit', 'nombre_bcn': 'TextEdit', 'tipo_bcn': 'TextEdit', 'nombre_mop': 'TextEdit', 'tipo_mop': 'TextEdit', 'direccion': 'TextEdit', 'shape_leng': 'TextEdit', 'ident': 'TextEdit', });
lyr_inundaciones_4.set('fieldImages', {'id': 'TextEdit', 'id_obs': 'TextEdit', 'Obs': 'TextEdit', 'Comuna': 'TextEdit', 'Origen': 'TextEdit', });
lyr_canales_17comunas_5.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'codcan': 'TextEdit', 'nomcan': 'TextEdit', 'n_acciones': 'TextEdit', 'porc_reves': 'TextEdit', 'origen': 'TextEdit', 'fuentehid': 'TextEdit', 'tipo_canal': 'TextEdit', 'oua': 'TextEdit', 'oua_tipo': 'TextEdit', 'jv': 'TextEdit', 'ou_id': 'TextEdit', 'jv_id': 'TextEdit', 'f_trazado': 'TextEdit', 'f_num_acc': 'TextEdit', 'f_orign_fh': 'TextEdit', 'f_revest': 'TextEdit', 'f_oua': 'TextEdit', });
lyr_ssr_17comunas_6.set('fieldImages', {'id': 'TextEdit', 'ID_IDE': 'TextEdit', 'NOMBRE': 'TextEdit', 'MXSITEID': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_COM': 'TextEdit', 'COD_PROV': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'FUENTE': 'TextEdit', 'FECHA_ACTU': 'DateTime', 'LEVANTAMIE': 'TextEdit', });
lyr_rm_1.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'CUT_REG': 'no label', 'REGION': 'no label', 'SUPERFICIE': 'no label', });
lyr_comunas_17_2.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'hidden field', 'SUPERFICIE': 'no label', });
lyr_redhidro_17comunas_3.set('fieldLabels', {'id': 'no label', 'cod_cuen': 'no label', 'cod_subc': 'no label', 'cod_ssubc': 'no label', 'nom_cuen': 'no label', 'nom_subc': 'hidden field', 'nom_ssubc': 'no label', 'strahler_n': 'no label', 'nombre_bcn': 'hidden field', 'tipo_bcn': 'no label', 'nombre_mop': 'no label', 'tipo_mop': 'no label', 'direccion': 'no label', 'shape_leng': 'no label', 'ident': 'no label', });
lyr_inundaciones_4.set('fieldLabels', {'id': 'no label', 'id_obs': 'no label', 'Obs': 'hidden field', 'Comuna': 'hidden field', 'Origen': 'hidden field', });
lyr_canales_17comunas_5.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'codcan': 'no label', 'nomcan': 'hidden field', 'n_acciones': 'no label', 'porc_reves': 'no label', 'origen': 'no label', 'fuentehid': 'no label', 'tipo_canal': 'hidden field', 'oua': 'no label', 'oua_tipo': 'no label', 'jv': 'no label', 'ou_id': 'no label', 'jv_id': 'no label', 'f_trazado': 'no label', 'f_num_acc': 'no label', 'f_orign_fh': 'no label', 'f_revest': 'no label', 'f_oua': 'no label', });
lyr_ssr_17comunas_6.set('fieldLabels', {'id': 'no label', 'ID_IDE': 'no label', 'NOMBRE': 'hidden field', 'MXSITEID': 'no label', 'COD_REG': 'no label', 'COD_COM': 'no label', 'COD_PROV': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'hidden field', 'FUENTE': 'no label', 'FECHA_ACTU': 'no label', 'LEVANTAMIE': 'no label', });
lyr_ssr_17comunas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});