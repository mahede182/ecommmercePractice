import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const Category = () => {
  const types = [
    {
      id: '0',
      image: require('../assets/category/Shirt.png'),
      name: 'Man Shirt',
    },
    {
      id: '1',
      image: require('../assets/category/Dress.png'),
      name: 'Dress',
    },
    {
      id: '2',
      image: require('../assets/category/MenWork.png'),
      name: 'Man Work',
    },
    {
      id: '3',
      image: require('../assets/category/WomenBag.png'),
      name: 'Women Bag',
    },
    {
      id: '4',
      image: require('../assets/category/MenWork.png'),
      name: 'Man Bag',
    },
    {
      id: '5',
      image: require('../assets/category/MenWork.png'),
      name: 'Trouser',
    },
    {
      id: '6',
      image: require('../assets/category/Dress.png'),
      name: 'Lehenga',
    },
    {
      id: '7',
      image: require('../assets/category/Shirt.png'),
      name: 'Payjama',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={styles.subContainer} key={index}>
            <Image source={item.image} style={styles.imgStyle} />
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  subContainer: {
    margin: 10,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textStyle: {
    marginTop: 6,
    textAlign: 'center',
  },
});
