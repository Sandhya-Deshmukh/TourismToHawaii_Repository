import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import IMAGES from '../components/images';
import SimpleListView from '../components/dropDown/simpleListView';
import HorizontalImageList from '../components/dropDown/horizontalImageList';
import TravelGuide from './travelGuide';
import PrimaryButton from '../components/button/primaryButton';
const HomeScreen = () => {
  const names = [
    {id: '1', name: 'Adventure'},
    {id: '2', name: 'Culinary'},
    {id: '3', name: 'Eco-tourism'},
    {id: '4', name: 'Family'},
    {id: '5', name: 'Sport'},
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image style={{height: 200}} source={IMAGES.HOME_HEADER}></Image>
      <ScrollView>
        <Text style={styles.text}>Highligts</Text>

        <HorizontalImageList />
        <Text style={styles.text}>Catergories</Text>
        <SimpleListView data={names} />
        <Text style={styles.text}>Travel Guide</Text>

        <TravelGuide />

        <PrimaryButton title={'Book a trip'} style={styles.loadingButton} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default HomeScreen;
