import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../theme';
import {RTextInput} from '../components/RestyleTextInput';
import {offerData} from '../helper/NotifiData';
import {TofferData} from '../helper/NotifiData.t';
import {ReStyleBox} from '../components/RestyleBox';
import {ReStyleButton} from '../components/RestyleBtn';
import RButton from '../components/RButton';
import {RestyleButton} from '../components';
const Text = createText<ReStyleTheme>();

const Notification: React.FC = (): JSX.Element => {
  return (
    <ReStyleBox flex={1} paddingTop="l" backgroundColor="white">
      {/* <CustomHeader title={'Notification'} /> */}
      <ReStyleBox paddingTop={'sm'} paddingHorizontal="sm">
        {offerData.map((item: TofferData, key) => {
          return (
            <Pressable
              key={key}
              style={styles.padding}
              onPress={() => console.log('on press')}>
              <Text>{item.title}</Text>
            </Pressable>
          );
        })}
        <RTextInput placeholder="hello" />
        <RestyleButton label="Label" />
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default Notification;

const styles = StyleSheet.create({});
