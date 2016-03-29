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

define(["dojo/_base/kernel","dojo/_base/config","dojo/has"],function(o,i,s){var t=window.location,e=t.pathname,n={version:"3.16",_appBaseUrl:t.protocol+"//"+t.host+e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]))};i.noGlobals||(window.esri=n),o.isAsync||s.add("extend-esri",1);var r=n.dijit=n.dijit||{};return r._arcgisUrl=("file:"===t.protocol?"http:":t.protocol)+"//www.arcgis.com/sharing/rest",n});