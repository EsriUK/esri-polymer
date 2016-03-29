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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(e,r,s,t){var o=e(null,{declaredClass:"esri.layers.FeatureEditResult",constructor:function(e){if(e&&r.isObject(e)&&(this.objectId=e.objectId,this.success=e.success,!e.success)){var s=e.error;this.error=new Error,this.error.code=s.code,this.error.message=s.description}}});return s("extend-esri")&&r.setObject("layers.FeatureEditResult",o,t),o});