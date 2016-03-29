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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../kernel","./Templated","dojo/text!./templates/OptionalLabel.html"],function(e,t,o,c,d,i,n,s,h){var a=e([s],{checkedAttr:"",label:null,templateString:h,postCreate:function(){this.inherited(arguments),null!=this.checkedAttr&&this.checkedAttr.length>0&&this.setChecked(!0)},_onClick:function(){var e=o.contains(this.switchNode,"checked");this.setChecked(!e),this.onClick(!e)},onClick:function(){},setChecked:function(e){e?o.add(this.switchNode,"checked"):o.remove(this.switchNode,"checked")}});return i("extend-esri")&&t.setObject("dijit.metadata.base.OptionalLabel",a,n),a});