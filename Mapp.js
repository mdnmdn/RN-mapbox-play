import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken("pk.eyJ1IjoibWRuc3luIiwiYSI6ImNqYjJlazI1bjJhejEycW8xdHlqMWRyaDYifQ.ulhUqSzC6RBTMfb1YNxrug");



export default class Mapp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={'mapbox://styles/mdnsyn/cjb3i11b2fbvi2ss869rss06y'}
          ref={(ref) => this.map = ref}
          showUserLocation={false}
          pitchEnabled={false}
          rotateEnabled={false}
          logoEnabled={false}
          compassEnabled={false}
          onRegionDidChange={null}
          style={styles.map}
          onDidFinishLoadingMap={null}
        >
        </MapboxGL.MapView>
        <Text>Shake your phone to open the developer menu.</Text>
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
    borderColor: 'red',
    borderWidth: 1,
  }
});
