import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import IMAGES from '../components/images';
import STRING from '../components/string';
import SimpleListView from '../components/dropDown/simpleListView';
import TravelGuide from './travelGuide';
import PrimaryButton from '../components/button/primaryButton';

const SurfingScreen = () => {
  const names = [
    {id: '1', name: 'Maui'},
    {id: '2', name: 'Kauai'},
    {id: '3', name: 'Honolulu'},
  ];
  return (
    <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
      <ScrollView>
        <Image style={{height: 200}} source={IMAGES.SURRFING}></Image>
        <Text style={styles.subText}>{STRING.SURFING_NOTE}</Text>
        <Text style={styles.text}>Top Sports</Text>
        <SimpleListView data={names} />
        <Text style={styles.text}>Travel Guide</Text>

        <TravelGuide />

        <PrimaryButton title={'Book a trip'} style={styles.loadingButton} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  subText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingButton: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 7,
    borderWidth: 1,
  },
});
export default SurfingScreen;
