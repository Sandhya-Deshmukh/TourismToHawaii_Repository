import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import IMAGES from '../images';

const HorizontalImageList = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.shadowBox}>
          <Image
            style={{height: 100, width: 200}}
            source={IMAGES.SURFING}></Image>
          <Text style={styles.headerText}>Surfing</Text>
          <Text>Best Hawaiian island for surfing.</Text>
          {/* // <FlatList
    //   data={imageUrls}
    //   horizontal
    //   renderItem={({item}) => (
    //     <Image source={{uri: item}} style={styles.image} />
    //   )}
    //   keyExtractor={(item, index) => index.toString()}
    //   showsHorizontalScrollIndicator={false}
    // /> */}
        </View>
        <View style={styles.shadowBox}>
          <Image
            style={{height: 100, width: 200}}
            source={IMAGES.SURFING}></Image>
          <Text style={styles.headerText}>Surfing</Text>
          <Text>Best Hawaiian island for surfing.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  shadowBox: {
    width: 230,
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    marginTop: 20,
    //marginBottom: 60,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});

export default HorizontalImageList;
