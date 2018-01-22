## Sample Mapbox playground

React-Native mapbox playground to check issues 


To run:

* Create a env.json file from env.sample.json and set the mapbox access token.
* `npm install`
* Run the specific version with:

```
npm start ios
npm start android
```

All the issues are reproduced in specific components in the src folder.

Most of the issues regard behaviour of ShapeSource and SymbolLayer.

* **TapProblem.js**: running on the JsCore engine (not debugging remotely) if the onPress event 
  of the ShapeSource triggers a redraw (directly with a setState o indirectly via redux) the processor
  goes to 100% and the js realm stops to respond. If the event is postponed via a setTimeout the app
  remain responsive but there is a percepible delay before the result
* **SingleShapeSource.js**: running on androd simulator the symbols have strange behaviours, 
  colored icons became b/w, panning and zooming the icons glitches between color and b/w
  (this behaviour is visible also with other samples)
*  


In order to enable a specific view you have 
to comment/uncomment the corresponding import in _index.js_   