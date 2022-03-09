import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const VerticalFoodCart = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.padding,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      {/* CALORIES AND FAVOURITE */}
      <View style={{flexDirection: 'row'}}>
        {/* CALORIES */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={icons.calories} style={{width: 30, height: 30}} />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
            {item.calories} Calories
          </Text>
        </View>
        {/* FAVOURITE */}
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      {/* IMAGE */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={item.image} style={{height: '100%', width: '100%'}} />
      </View>

      {/* INFO */}
      <View style={{alignItems: 'center', marginTop: -20}}>
        <Text style={{...FONTS.h3}}>{item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            textAlign: 'center',
            ...FONTS.body5,
          }}>
          {item.description}
        </Text>
        <Text style={{marginTop: SIZES.radius, ...FONTS.h2}}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCart;
