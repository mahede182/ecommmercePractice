import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';
import {RestyleTextInput} from '../RestyleTextInput';

const FilterSearch = () => {
  return (
    <ReStyleBox>
      <RestyleTxt>FilterSearch</RestyleTxt>
      <ReStyleBox paddingVertical={"m"}>
        <RestyleTxt variant="subHeader">Price Range</RestyleTxt>
        <ReStyleBox flexDirection={'row'} paddingVertical={"s"}>
          <RestyleTextInput placeholder='$4645' width="40%" marginHorizontal="s" />
          <RestyleTextInput width="40%" marginHorizontal="s" />
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default FilterSearch;
const styles = StyleSheet.create({});
