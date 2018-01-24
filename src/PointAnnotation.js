import React from 'react';
import { StyleSheet, Text, View, Platform, Image, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { generatePoints } from './utils';


// icons
import blueStar from '../assets/bluestar.png';
import callout from '../assets/callout.png';

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

export default class PointAnnotation extends React.Component {

  constructor(...params){
    super(...params);

    this.state = { label: '-', count: 0 };

  }

  render() {

    const self = this;
    const setLabel = (label) => {
      l('onSelected', label);
      //setTimeout(() =>
        this.setState({ label })
      // , 50);
    };

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


          {featureCollection.features.map( f => {

            return <MapboxGL.PointAnnotation
              key={f.id}
              id={f.id}
              title='Test'
              coordinate={f.geometry.coordinates}>


                <TouchableWithoutFeedback onPress={() => setLabel('--' + f.id)} >
                  <View style={styles.vehicleContainer}  >
                    <Image source={callout} style={styles.callout} />
                    <Image source={{uri:f.properties.url}} style={styles.image} />
                  </View>
                </TouchableWithoutFeedback>


                {/*<MapboxGL.Callout title={f.id} />*/}
            </MapboxGL.PointAnnotation>

          })}


        </MapboxGL.MapView>
        <View style={styles.bottomView} >
          <TouchableOpacity onPress={() => {
            l('count', this.state.count);
            this.setState({...this.state, count: this.state.count+1});

          }}>
              <Text>{this.state.count} {this.state.label}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const ANNOTATION_SIZE = 45;

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
  annotationContainer: {
    width: ANNOTATION_SIZE,
    height: ANNOTATION_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: ANNOTATION_SIZE / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.45)',
  },
  annotationFill: {
    width: ANNOTATION_SIZE - 3,
    height: ANNOTATION_SIZE - 3,
    borderRadius: (ANNOTATION_SIZE - 3) / 2,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  },
  vehicleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    height: 70,
  },
  callout: {
    height: 64,
    width: 50,
  },
  image: {
    marginTop: -52,
    height: 30,
    width: 30,
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