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

define(["../kernel","../lang","dojo/_base/declare","dojo/_base/lang","dojo/has"],function(i,o,a,t,e){var p=a(null,{declaredClass:"esri.arcgis.OAuthInfo",constructor:function(i){var o={expiration:20160,minTimeUntilExpiration:30,portalUrl:"https://www.arcgis.com",authNamespace:"/",forceLogin:!1,showSocialLogins:!1,popup:!1,popupCallbackUrl:"oauth-callback.html",popupWindowFeatures:"height=480,width=800,location,resizable,scrollbars,status"};t.mixin(this,o,i)},_oAuthCred:null,toJson:function(){return o.fixJson({appId:this.appId,expiration:this.expiration,locale:this.locale,minTimeUntilExpiration:this.minTimeUntilExpiration,portalUrl:this.portalUrl,authNamespace:this.authNamespace,forceLogin:this.forceLogin,showSocialLogins:this.showSocialLogins,popup:this.popup,popupCallbackUrl:this.popupCallbackUrl,popupWindowFeatures:this.popupWindowFeatures})}});return e("extend-esri")&&t.setObject("arcgis.OAuthInfo",p,i),p});