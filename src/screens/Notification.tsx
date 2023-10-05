import {StyleSheet} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../theme';
import {RTextInput} from '../components/RInput';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const Notification: React.FC = (): JSX.Element => {
  return (
    <Box flex={1} paddingTop="l" backgroundColor="white">
      <CustomHeader title={'Notification'} />
      <Box paddingTop={'sm'} paddingHorizontal="sm">
        {notificationData.map((item: TNotiData, index) => {
          return (
            <Pressable
              key={index}
              style={styles.padding}
              onPress={() => handlePress(item.screen)}>
              <NotificationCard
                img={item.img}
                title={item.title}
                numberOfNotifi={item.numberOfNotifi}
              />
            </Pressable>
          );
        })}
      </Box>
    </Box>
  );
};

export default Notification;

const styles = StyleSheet.create({});
