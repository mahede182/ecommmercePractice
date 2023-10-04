import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import Countdown from 'react-native-countdown-component';
import {Category, CategoryTitle, SingleCard} from '../components';
import ProductCard from '../components/Card/ProductCard';
// type SocialBtnProps = {
//     label: string;
//     imgSource: ImageSourcePropType;
// };

const HomeScreen: React.FC = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIndexChanged = index => {
    setCurrentIndex(index);
  };
  return (
    <>
      <View style={styles.searchBarStyle}>
        <View style={styles.inputContainerStyle}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon/Search.png')}
          />
          <TextInput style={styles.inputStyle} placeholder="Search Product" />
        </View>
        <Image
          style={{
            height: 24,
            width: 24,
            resizeMode: 'cover',
            marginHorizontal: 16,
          }}
          source={require('../assets/icon/love.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/Group.png')}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.deviderStyle} />
        <View style={{height: 245}}>
          <Swiper
            loop={false}
            onIndexChanged={onIndexChanged}
            showsButtons={false}
            showsPagination={true}
            style={styles.wrapper}
            height={250}>
            {/* Your individual slides here */}
            <View style={styles.slide}>
              <ImageBackground
                style={styles.heroImage}
                resizeMode="cover"
                source={require('../assets/product/PromotionImage.png')}>
                <Text style={styles.heroText}>Super Flash Sale 50% off</Text>
                <Countdown
                  size={16}
                  until={1000}
                  digitStyle={{
                    backgroundColor: '#FFF',
                  }}
                  digitTxtStyle={{color: '#000'}}
                  separatorStyle={{
                    color: '#fff',
                  }}
                  timeToShow={['H', 'M', 'S']}
                  showSeparator
                />
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/product/HeroImage.png')} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/product/HeroImage.png')} />
            </View>
          </Swiper>
        </View>
        <View>
          <CategoryTitle leftTitle="Category" rightTitle="More Category" />
          <Category />
          <CategoryTitle leftTitle="Flash Sale " rightTitle="See More" />
          <ProductCard />
          <CategoryTitle leftTitle="Mega Sale" rightTitle="See More" />
          <ProductCard />
        </View>
        <ImageBackground
          style={[styles.heroImage, {borderRadius: 5, marginVertical: 5}]}
          resizeMode="cover"
          source={require('../assets/product/HeroImage.png')}>
          <Text style={styles.heroText}>Recomended Product</Text>
          <Text style={styles.descText}>We recommend the best for</Text>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <SingleCard
            img={require('../assets/product/ProductImage9.png')}
            title="Nike Air Max 270 React ENG"
            disPrice={29943}
            price={53433}
            discount={24}
          />
          <SingleCard
            img={require('../assets/product/ProductImage8.png')}
            title="Nike Air Jordan Use"
            disPrice={34510}
            price={26433}
            discount={20}
          />
          <SingleCard
            img={require('../assets/product/ProductImage5.png')}
            title="Micheal Jackson 545G Dubai"
            disPrice={6952}
            price={25342}
            discount={20}
          />
          <SingleCard
            img={require('../assets/product/ProductImage2.png')}
            title="Nike Air Jordan Use"
            disPrice={34510}
            price={26433}
            discount={20}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    width: 265,
    height: 45,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
  inputStyle: {
    paddingHorizontal: 8,
  },
  searchBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  deviderStyle: {
    borderBottomColor: '#EBF0FF',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 206,
    borderRadius: 5,
  },
  heroText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: 0.5,
    height: 72,
    width: '65%',
    marginLeft: 24,
    marginRight: 120,
    marginVertical: 32,
  },
  wrapper: {},
  descText: {
    color: '#fff',
    marginHorizontal: 23,
    fontSize: 14,
    fontWeight: '400',
  },
});
