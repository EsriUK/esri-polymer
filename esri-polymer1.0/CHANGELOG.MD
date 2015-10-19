Esri Polymer - Change Log


v 1.2.0
* Upgraded to Polymer v1.1.5 (from v1.0.2)
* Resolved various update issues (dom-element to dom-module etc)
* Removed unnecessary hacky work arounds for dom loading using async as per [documention](https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#initialization-order)
* Upgraded to ArcGIS JavaScript API 3.14 (from 3.13)

v 1.1.0

* Upgraded to Polymer v1.0.0
* Improved handling of low and high zoom levels (endless loop extent changing)
* Added listeners for changes on map attributes (zoom, basemap, lat, lng)

v 1.0.4

* Added click-on-feature layer default popup for webMapId constructed maps.
* Changed z-index of added elements (bounding box, zoom level) to not overlay on to popups.

v 1.0.3

* Added click-on-feature layer default popup (just uses attributes as content and "Feature" as title)
* Changed font to Nunito
