import React from 'react';
import {View, Text, Image, ImageBackground, Animated} from 'react-native';
import {constants, images, FONTS, SIZES, COLORS} from '../../constants';
import {Dots} from '../../components';

const OnBoarding = () => {
  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          height: 160,
        }}>
        {/* PAGINATION */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Dots />
        </View>

        {/* BUTTONS */}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {renderHeaderLogo()}

      <Animated.FlatList
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={26}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}>
              {/* HEADER */}
              <View
                style={{
                  flex: 3,
                }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: '100%',
                    width: '100%',
                  }}>
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* DETAIL */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.radius,
                }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    fontSize: 25,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
