import { AppRegistry } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import config from './env';

MapboxGL.setAccessToken(config.accessToken);


import App from './src/SingleShapeSource';
//import App from './src/DoubleShapeSource';
//import App from './src/ShapeSourceWithDoubleLayer';
//import App from './src/ParametrizedRemoteSymbols';
//import App from './src/FromMapBoxSamples'; // from mapbox samples
//import App from './src/TapProblem'; // problem on press

AppRegistry.registerComponent('mapplay', () => App);

