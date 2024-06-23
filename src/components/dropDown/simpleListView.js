// src/NameListView.js

import React from 'react';
import {View, FlatList, Text, StyleSheet, Image} from 'react-native';
import IMAGES from '../images';

const SimpleListView = ({data}) => {
  const renderItem = ({item}) => (
    <View>
      <View style={styles.shadowBox}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text style={styles.name}>{item.name}</Text>
          <Image
            style={{
              alignItems: 'flex-end',
              height: 20,
              width: 30,
              alignSelf: 'flex-end',
              flex: 0.1,
              tintColor: '#3CB371',
            }}
            source={IMAGES.ARROW}></Image>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    flex: 0.8,
    fontSize: 18,
    color: 'black',
  },
  shadowBox: {
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    marginTop: 20,
    //marginBottom: 60,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});

export default SimpleListView;
