import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleSignInButton: React.FC = (): JSX.Element => {
  const [userInfo, setUserInfo] = React.useState<any | null>(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1023894885663-ds578n16m99j4nkkjgc94qeee5dbchfe.apps.googleusercontent.com',
    });
  });
  //Signin
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
    } catch (error) {
      // @ts-ignore
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancelled');
        // @ts-ignore
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('progress...');
        // @ts-ignore
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play service not available');
      } else {
        // some other error happened
        console.log('Something else error', error);
      }
    }
  };
  //Signout
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setState({user: null}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  let content;
  if (userInfo == null) {
    return (content = <Text>You Need Sign in</Text>);
  }

  if (userInfo !== null) {
    return (content = (
      <Text style={styles.textStyle} onPress={() => signOut}>
        Sign out
      </Text>
    ));
  }
  return (
    <View>
      {content}
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
        disabled={false}
      />
      ;
    </View>
  );
};

export default GoogleSignInButton;

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
});
