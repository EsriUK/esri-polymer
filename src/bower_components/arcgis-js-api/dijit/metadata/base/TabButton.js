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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/has","./Templated","dojo/text!./templates/TabButton.html","../../../kernel"],function(t,e,n,o,a,i,l){var d=t([a],{label:null,templateString:i,postCreate:function(){this.inherited(arguments)},_onClick:function(){this.onClick(this)},onClick:function(){},setLabel:function(t){"undefined"==typeof t&&(t=null),this.label=t,this.setI18nNodeText(this.labelNode,t)}});return o("extend-esri")&&e.setObject("dijit.metadata.base.TabButton",d,l),d});