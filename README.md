#Esri Polymer  

This project has turned Esri ArcGIS JavaScript web maps and asscociated elements into web components that can be used to create maps decleratively to HTML. It leverages Googles Polymer library which allows users to create custom web components.

The code also includes examples of how to make use of Polymer's variable observation and two way databinding. The example observes zoom level and extent and represents this as inputs on the map which can themselves be changed.

Feature Layers are supported, and come with a default popup which is just a list of key/value pairs formatted nicely.

It currently supports:


* **esri-map** - Attributes: basemap, zoom, centerLng, centerLat, webMapId (you can use a web map ID to pull through a map)

* **esri-featurelayer** - Attributes: featurelayer (the feature service url)

* **esri-marker** - Attributes: lat, lng

    * **esri-marker-title** - Attributes: none -  text goes between tags

    * **esri-marker-content** - Attributes: none - text goes between tags  



![Esri Polymer Screenshot 1](https://raw.githubusercontent.com/JamesMilnerUK/esri-polymer/master/screenshot1.png "Esri Polymer Screenshot - Action Shot")

![Esri Polymer Screenshot 2](https://raw.githubusercontent.com/JamesMilnerUK/esri-polymer/master/screenshot2.png "Esri Polymer Screenshot - DOM")



#Getting Started

An example of using esri-polymer is shown in the esri-polymer.html page in the repository. Usage is as so:

   ```html
    <esri-map basemap="dark-gray" centerLng="-0.122" centerLat="51.514" zoom="7">
        <esri-featurelayer featurelayer="http://services.arcgis.com/Qo2anKIAMzIEkIJB/arcgis/rest/services/TubeMap/FeatureServer/2"> </esri-featurelayer>
        <esri-marker lng="-0.5" lat="51.3">
            <esri-marker-title>Hello World</esri-marker-title>
            <esri-marker-content>Some Content</esri-marker-content>
        </esri-marker>
    </esri-map>
   ```

For generating a web map from an ID:

   ```html
    <esri-map webMapId="8960fbd6893348709acac9e7a3b61f0c">
    </esri-map>
   ```


#Live Demo

You can see a live demo [here](http://appsstage.esriuk.com/app/developerevangelist/215/wmt/view/d147785761984557b69c73adf4a8e2da/esri-polymer/esri-polymer1.0/esri-polymer.html "Esri Polymer Live Demo")

It displays one web map constructed using attributes (basemap, zoom, etc), with a feature layer web component nested inside it and a second map constructed with a web map ID.

#Resources

- [Polymer Offical](https://www.polymer-project.org/0.5/ "Polymer Offical")
- [Polymer Developer Guide](https://www.polymer-project.org/0.5/docs/polymer/polymer.html "Polymer Developer Guide")
- [Polymer in 10 minutes](https://www.polymer-project.org/0.5/docs/start/creatingelements.html "Polymer in 10 minutes")
- [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/jsapi/ "Esri ArcGIS JavaScript API")
- [ArcGIS for Developers](https://developers.arcgis.com/ "ArcGIS for Developers")
- [A Guide to Web Components](https://css-tricks.com/modular-future-web-components/ "A guide to web components")
- [webcomponents.js](https://github.com/webcomponents/webcomponentsjs "webcomponents.js")
- [Stackoverflow - Polymer](http://stackoverflow.com/search?q=polymer "Stackoverflow - Polymer")

#Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue. Thank you!

#Contributing

Anyone and everyone is welcome to contribute. Please see our guidelines for contributing.

#Licensing

Copyright 2015 Esri UK

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's LICENSE file.

[](Esri Tags: ArcGIS Web Components Mapping Polymer Google Framework)
[](Esri Language: JavaScript)
