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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","dijit/_WidgetBase","../../../kernel"],function(e,t,n,r,o,a,u){var i=e([a],{postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(){},afterViewDocumentLoad:function(){},deleteMetadata:function(){var e=new o;return e.resolve(),e},getAllowEditMetadata:function(){return!1},getAllowDeleteMetadata:function(){return!1},getAllowPullItem:function(){return!1},getAllowPushToItem:function(){return!1},getOriginalXml:function(){return null},pullItem:function(){var e=new o;return e.resolve(),e},saveXml:function(){var e=new o;return e.resolve(),e}});return r("extend-esri")&&t.setObject("dijit.metadata.context.GxeAdaptor",i,u),i});