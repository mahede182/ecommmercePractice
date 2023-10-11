import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {ReStyleText} from '../RestyleTextInput';

type Props = {
  focused: boolean;
  label: string;
};

const CustomLabel: React.FC<Props> = ({focused, label}: Props): JSX.Element => {
  return (
    <ReStyleText variant={focused ? 'subHeader' : 'button'}>
      {label}
    </ReStyleText>
  );
};
export default CustomLabel;
