import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {product} from '../helper/DATA';
const ProductCard = () => {
  return (
    <ScrollView bounces horizontal showsHorizontalScrollIndicator={false}>
      {product.map((item, index) => (
        <TouchableOpacity style={styles.productContainer} key={index}>
          <Image
            style={styles.imgStyle}
            resizeMode="cover"
            source={item.image}
          />
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.dPriceStyle}>$ {item.DiscountPrice}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discount}>${item.price}</Text>
            <Text style={styles.discountPer}>&nbsp; {item.discount}% Off</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    height: 235,
    width: 141,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  productTitle: {
    paddingVertical: 5,
    color: '#223263',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  imgStyle: {
    height: 110,
    width: 110,
  },
  dPriceStyle: {
    color: '#40BFFF',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  discount: {
    color: '#9098B1',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.5,
    textDecorationLine: 'line-through',
  },
  discountPer: {
    color: '#FB7181',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 15,
    letterSpacing: 0.5,
  },
});
