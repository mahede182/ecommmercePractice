import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type singleCardProps = {
  title: string;
  img: ImageSourcePropType;
  disPrice: number;
  price: number;
  discount: number;
};

const SingleCard: React.FC<singleCardProps> = ({
  img,
  title,
  disPrice,
  price,
  discount,
}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.productContainer}>
      <Image style={styles.imgStyle} resizeMode="cover" source={img} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.dPriceStyle}>$ {disPrice}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.discount}>{price}</Text>
        <Text style={styles.discountPer}>&nbsp; {discount}% Off</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  productContainer: {
    height: 285,
    width: 165,
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
    height: 133,
    width: 133,
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
