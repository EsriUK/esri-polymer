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

define(["dojo/string","../../tasks/geoenrichment/DriveBuffer","../../tasks/geoenrichment/IntersectingGeographies","../../tasks/geoenrichment/DriveUnits","dojo/i18n!../../nls/jsapi","../../extend"],function(e,t,i,n,r,s){function u(e){return(e&&e.radii[0]||1).toString()}function o(e){return e&&e.units||n.MILES}function f(s,f){switch(s){case"polyline":return f instanceof t?e.substitute(r.lineBuffer[n.MILES],{radius:"1"}):e.substitute(r.lineBuffer[o(f)],{radius:u(f)});case"polygon":return r.polygon;default:return f instanceof t?e.substitute(r.pointDriveTime[o(f)],{radius:u(f)}):f instanceof i?e.substitute(r.stdGeo,{level:f.geographyLevels[0].layerID}):e.substitute(r.pointRing[o(f)],{radius:u(f)})}}return r=r.geoenrichment.dijit.bufferTitle,s("esri.dijit.geoenrichment.bufferTitle",f),f});