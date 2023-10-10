import {View, Text, Image} from 'react-native';
import React from 'react';
import RButton from '../Button/RButton';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';

type Props = {
  label: string;
  exerpt: string;
  phone: string;
};

const AdreessCard: React.FC<Props> = ({
  label,
  exerpt,
  phone,
}: Props): JSX.Element => {
  return (
    <ReStyleBox
      p={'m'}
      marginVertical={'s'}
      borderColor={'blackLight'}
      borderWidth={1}
      borderRadius={'5'}>
      <RestyleTxt variant={'subHeader'} marginVertical={'s'}>
        {label}
      </RestyleTxt>
      <RestyleTxt color={'blackLight'} variant={'body'} marginVertical={'s'}>
        {exerpt}
      </RestyleTxt>
      <RestyleTxt color={'blackLight'} variant={'body'} marginVertical={'s'}>
        {phone}
      </RestyleTxt>

      <ReStyleBox flexDirection={'row'} alignItems={'center'}>
        <RButton
          label="Edit"
          width={75}
          height={57}
          color={'white'}
          bg={'bluePrimary'}
        />
        <Image
          source={require('../../assets/icon/delete.png')}
          style={{marginLeft: 20}}
        />
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default AdreessCard;
