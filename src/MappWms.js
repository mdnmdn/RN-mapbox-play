import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

const IS_ANDROID = Platform.OS === 'android';
const l = console.log.bind(console);

const center = {
  coords: [7.65, 45.07],
  zoomLevel: 10.5,
};

const icoUrl = 'https://findicons.com/files/icons/1700/2d/512/star.png';

const radius= 0.2;

const nodes = [1, 2, 3, 4, 5,6,7,8,9].map( id => ({
  id,
  coords: [
    center.coords[0] + Math.random() * radius - (radius / 2),
    center.coords[1] + Math.random() * radius - (radius / 2),
  ],
}));


console.log(nodes);

export default class Mapp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURLa={'mapbox://styles/mdnsyn/cjb3i11b2fbvi2ss869rss06y'}
          ref={(ref) => this.map = ref}
          centerCoordinate={center.coords}
          zoomLevel={center.zoomLevel}
          showUserLocation={false}
          pitchEnabled={false}
          rotateEnabled={false}
          logoEnabled={false}
          compassEnabled={false}
          onRegionDidChange={l.bind(null,'onRegionDidChange')}
          style={styles.map}
          onDidFinishLoadingMap={l.bind(null,'onDidFinishLoadingMap')}
        >



          {nodes.map(v => {

            return (<MapboxGL.ShapeSource
              key={`vehicle-${v.id}`}
              id={`vehicleSource-${v.id}`}
              shape={MapboxGL.geoUtils.makePoint(v.coords)}
              itemId={v.id}

            >
                {/*<MapboxGL.CircleLayer id={`b-${v.id}`} style={mapStyles.nodeBorder}/>*/}
              <MapboxGL.CircleLayer id={`bg-${v.id}`} style={mapStyles.nodeBackground} />

              <MapboxGL.SymbolLayer id={`i-${v.id}`}  style={[mapStyles.nodeIcon]}/>

            </MapboxGL.ShapeSource>);
          })}

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
    height: 70,
    width: '100%',
    borderColor: '#BBB',
    borderTopWidth: 1,
  }
});


const mapStyles = MapboxGL.StyleSheet.create({
  nodeBorder: {
    circleStrokeWidth: 2,
    circleRadius: 27,
    circleStrokeColor: '#187cc0',
  },
  nodeBackground: {
    circleRadius: 27,
    circleColor: 'white',
    circleStrokeWidth: 2,
    circleRadius: 27,
    circleStrokeColor: '#187cc0',
  },
  vehicleCallout: {
    //iconImage: calloutIco,
    iconSize: 0.4,
  },
  nodeIcon: {
    iconImage: icoUrl,
    iconSize: 0.04,
  },
});