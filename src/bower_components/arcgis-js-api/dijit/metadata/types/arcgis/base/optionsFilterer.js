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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel"],function(e,s,i,r){var t={filter:function(e,i,r){var t=s.filter(r,function(e){return e.NAPOnly&&!i.isAgsNAP?!1:!e.NAPFGDCOnly||i.isAgsNAP||i.isAgsFGDC?e.NAPExcluded&&i.isAgsNAP?!1:e.FGDCExcluded&&i.isAgsFGDC?!1:e.INSPIREExcluded&&i.isAgsINSPIRE?!1:!0:!1});return t}};return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.optionsFilterer",t,r),t});