import React, {useEffect} from 'react';
import {Dimensions, Text} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';

const MainLayout = () => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    console.log(progress.value);
    const scale = interpolate(progress.value, [0, 0.5, 1], [1, 0.9, 0.85], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [0, 26], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {transform: [{scale}], borderRadius};
  });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        },
        animatedStyle,
      ]}>
      <Text>MainLsdayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
