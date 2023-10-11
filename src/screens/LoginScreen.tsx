import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SocialButton, Devider} from '../components';
import LinkText from '../components/Button/LinkText';

export type LoginProps = {
  name?: string;
  email?: string;
};

const LoginScreen: React.FC<LoginProps> = (): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/core/Icon.png')}
        />
        <Text style={styles.headingTitle}>Welcome to Lafyuu</Text>
        <Text style={styles.textStyle}>Sign in to continue</Text>
      </View>
      <View style={{flex: 3, marginTop: 20}}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#9098B1"
          placeholder="Your Email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#9098B1"
          placeholder="Password"
        />
        <Devider label="OR" />
        <SocialButton
          label="Login with Google"
          imgSource={require('../assets/social/Google.png')}
        />
        <SocialButton
          label="Login with Facebook"
          imgSource={require('../assets/social/Facebook.png')}
        />
        <View style={{alignItems: 'center', paddingVertical: 10}}>
          <LinkText link="Forgot Password?" />
          <LinkText text="Don't have an account" link="Register" />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    // flexDirection: 'column',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 40,
    // backgroundColor: 'red',
  },
  imgStyle: {
    height: 72,
    width: 72,
    margin: 5,
  },
  headingTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    padding: 5,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  input: {
    height: 48,
    width: 340,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#EBF0FF',
    borderRadius: 5,
  },
});
