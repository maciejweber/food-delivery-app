import React from 'react';
import {View, Text, Animated} from 'react-native';
import {COLORS, constants, FONTS} from '../constants';

const Dots = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {constants.onboarding_screens.map((item, index) => {
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              width: 10,
              height: 10,
              backgroundColor: COLORS.primary,
            }}
          />
        );
      })}
    </View>
  );
};

export default Dots;
