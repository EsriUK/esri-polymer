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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/InputText"],function(e,t,r,n,a,o){var i=e([o],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(){this.inherited(arguments);try{var e=this.parentXNode.target;if("rpIndName"===e||"rpPosName"===e){var t=this.parentXNode.parentElement.gxePath+"/",r=this.parentXNode.domNode.parentNode,n=a.findInputWidget(t+"rpOrgName",r);n&&n.emitInteractionOccurred()}}catch(o){console.error(o)}}});return r("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputContactName",i,n),i});