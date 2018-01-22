import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import blueStar from '../assets/bluestar.png';
import yellowStar from '../assets/yellowstar.png';
import callout from '../assets/callout.png';

import featureCollection from '../data/sampe-from-mapbox';

const IS_ANDROID = Platform.OS === 'android';
const l = console.log.bind(console);

const styles = MapboxGL.StyleSheet.create({
  icon: {
    iconImage: '{icon}',
    iconSize: IS_ANDROID ? 2 : 1,
  },
});


console.log(JSON.stringify(featureCollection));

export default class MappSingleShapeSource extends React.Component {

  constructor(props){
    super(props);

    this.state = { label: 'tap on an icon' };
  }

  render() {

    const selectIco = e => {
      const id = e.nativeEvent.payload.id || e.nativeEvent.payload.properties.id || 'boh..';
      setTimeout(() => {
        console.log(e);
        this.setState({label: id} );
      },0);
    };

    return (
      <View style={otherStyles.container}>
        <MapboxGL.MapView
          zoomLevel={17}
          style={otherStyles.map}
          centerCoordinate={[-117.20611157485, 52.180961084261]}
          >


          <MapboxGL.ShapeSource
            id='exampleShapeSource'
            shape={featureCollection}
            images={{
              blue: blueStar,
              yellow: yellowStar
            }}
            onPress={selectIco}
          >
            <MapboxGL.SymbolLayer id='exampleIconName' style={styles.icon} />
          </MapboxGL.ShapeSource>

        </MapboxGL.MapView>
        <View style={otherStyles.bottomView}>
          <Text>{this.state.label}</Text>
        </View>
      </View>
    );
  }
}

// <MapboxGL.SymbolLayer id='exampleIconName' style={styles.icon} />

const otherStyles = StyleSheet.create({
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
  }
});

const mapStyles = MapboxGL.StyleSheet.create({
  nodeBackground: {
    circleRadius: 27,
    circleColor: 'white',
    circleStrokeWidth: 2,
    circleRadius: 27,
    circleStrokeColor: '#187cc0',
  },
  callout: {
    //iconImage: icoUrl,
    iconImage: callout,
    iconSize: IS_ANDROID ? 1 : 1,
  },
  nodeIcon: {
    //iconImage: icoUrl,
    iconImage: blueStar,
    iconSize: IS_ANDROID ? 0.1 : 0.06,
  },
});