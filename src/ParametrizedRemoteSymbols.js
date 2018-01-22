import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { generatePoints } from './utils';


// icons
import blueStar from '../assets/bluestar.png';
import yellowStar from '../assets/yellowstar.png';

// remote icons
const remoteIcon = 'https://findicons.com/icon/download/97199/circle_orange/48/png';

import featureCollection from '../data/sample';

const IS_ANDROID = Platform.OS === 'android';
const l = console.log.bind(console);

const center = {
  coords: [7.65, 45.07],
  zoomLevel: 10.5,
};


//const featureCollection = generatePoints(10, center.coords, 0.2);


l(JSON.stringify(featureCollection));

export default class MappSingleShapeSource extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          centerCoordinate={center.coords}
          zoomLevel={center.zoomLevel}
          showUserLocation={false}
          pitchEnabled={false}
          rotateEnabled={false}
          logoEnabled={false}
          compassEnabled={false}
          style={styles.map}
        >

          <MapboxGL.ShapeSource
            id="symbolLayerSource"
            shape={featureCollection}
            images={{
              blue: blueStar,
              yellow: remoteIcon,
            }}
          >

            <MapboxGL.SymbolLayer id='symbol' style={mapStyles.parameterIcon} />
          </MapboxGL.ShapeSource>

        </MapboxGL.MapView>
        <View style={styles.bottomView}>
          <Text>-</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  bottomView: {
    //height: 70,
    width: '100%',
    borderColor: '#BBB',
    borderTopWidth: 1,
  },
});


const mapStyles = MapboxGL.StyleSheet.create({
  nodeBackground: {
    circleRadius: 27,
    circleColor: 'white',
    circleStrokeWidth: 2,
    circleRadius: 27,
    circleStrokeColor: '#187cc0',
  },
  parameterIcon:{
    iconImage: '{icon}',
    iconSize: IS_ANDROID ? 1 : 0.5,
  },

  remoteIcon:{
    iconImage: remoteIcon,
    iconSize: IS_ANDROID ? 1 : 0.5,
  },

  nodeIcon: {
    //iconImage: icoUrl,
    iconImage: blueStar,
    iconSize: IS_ANDROID ? 0.1 : 0.06,
  },
});