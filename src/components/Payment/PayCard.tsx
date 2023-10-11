import {View, Text, Image} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {ReStyleText} from '../RestyleTextInput';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  cardNumber: number;
  cardHolder: string;
  cardSave: string;
  bg?: string;
};

const PayCard: React.FC<Props> = ({
  cardNumber,
  cardHolder,
  cardSave,
  bg,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity>
      <ReStyleBox
        paddingHorizontal={'l'}
        paddingVertical={'l'}
        marginHorizontal={'m'}
        marginVertical={'s'}
        height={190}
        width={'90%'}
        style={{backgroundColor: `${bg}`, borderRadius: 10}}
        justifyContent={'space-between'}>
        <Image
          source={require('../../assets/icon/masterCard.png')}
          style={{height: 26, width: 30}}
        />
        <ReStyleText style={{color: '#ffffff'}} variant={'heroTitle'}>
          {cardNumber}
        </ReStyleText>
        <ReStyleBox flexDirection={'row'}>
          <ReStyleBox paddingRight={'s'}>
            <ReStyleText variant={'cardNormal'}>CARD HOLDER</ReStyleText>
            <ReStyleText variant={'cardBold'}>{cardHolder}</ReStyleText>
          </ReStyleBox>
          <ReStyleBox paddingLeft={'s'}>
            <ReStyleText variant={'cardNormal'}>CARD SAVE</ReStyleText>
            <ReStyleText variant={'cardBold'}>{cardSave}</ReStyleText>
          </ReStyleBox>
        </ReStyleBox>
      </ReStyleBox>
    </TouchableOpacity>
  );
};

export default PayCard;
