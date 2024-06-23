import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Avatar} from 'react-native-paper';
import PrimaryButton from '../components/button/primaryButton';
import IMAGES from '../components/images';
const TravelGuide = () => {
  return (
    <View style={styles.shadowBox}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 0.7}}>
          <Text style={styles.name}> Hadwin Malone</Text>
          <Text style={styles.subText}> Guide SInce 2012</Text>
          <PrimaryButton
            title={'Contact'}
            style={styles.loadingButton}
            labelStyle={styles.labelStyle}
          />
        </View>
        <View style={{flex: 0.3}}>
          <Avatar.Image size={80} source={IMAGES.SURFING} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: '#808080',
  },
  shadowBox: {
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 7,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    loadingButton: {
      marginTop: 20,
      alignSelf: 'center',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#ffff',
    },
    labelStyle: {
      textAlign: 'center',
      fontSize: 17,
      paddingTop: 1,
      fontFamily: 'Poppins_SemiBold',
      alignSelf: 'center',
      color: '#000000',
    },
  },
});
export default TravelGuide;
