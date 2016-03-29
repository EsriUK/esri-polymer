// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","./Point","./Polyline","./Polygon","./Multipoint","./Extent"],function(e,o,n,i,t,r,s,y){function l(e){return void 0!==e.x&&void 0!==e.y?new i(e):void 0!==e.paths?new t(e):void 0!==e.rings?new r(e):void 0!==e.points?new s(e):void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?new y(e):void 0}function m(e){return e instanceof i?"esriGeometryPoint":e instanceof t?"esriGeometryPolyline":e instanceof r?"esriGeometryPolygon":e instanceof y?"esriGeometryEnvelope":e instanceof s?"esriGeometryMultipoint":null}function d(e){return"esriGeometryPoint"===e?i:"esriGeometryPolyline"===e?t:"esriGeometryPolygon"===e?r:"esriGeometryEnvelope"===e?y:"esriGeometryMultipoint"===e?s:null}var u={fromJson:l,getJsonType:m,getGeometryType:d};return o("extend-esri")&&e.mixin(e.getObject("geometry",!0,n),u),u});