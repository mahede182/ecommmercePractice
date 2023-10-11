import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../components/RestyleBox';
import {RestyleTxt} from '../components/RestyleTxt';
import {AddressCard, RestyleButton} from '../components';
import {RestyleTextInput} from '../components/RestyleTextInput';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import Address from '../components/Datails/Address/Address';
import Addresses from '../components/Datails/Address/Addresses';

const AddressScreen: React.FC = (): JSX.Element => {
  return (
    <>
      <CustomHeader title="Address" />
      {/* <AddressCard
        label="Priscekila"
        exerpt="3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States"
        phone="+99 1234567890"
      />
      <AddressCard
        label="Ahamed Khaidir"
        exerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at?"
        phone="+99 1234567890"
      />
      */}
      <ScrollView>
        <Addresses />
        <RestyleButton
          marginTop={'xl'}
          label="Add Address"
          width={340}
          height={55}
          color={'white'}
          bg={'bluePrimary'}
        />
      </ScrollView>
    </>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
