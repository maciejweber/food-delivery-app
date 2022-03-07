import React, {useCallback, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import MainLayout from '../screens/MainLayout';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerStatus,
} from '@react-navigation/drawer';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateNode,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  Value,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}>
      <Image
        source={icon}
        style={{width: 20, height: 20, tintColor: COLORS.white}}
      />
      <Text style={{marginLeft: 15, color: COLORS.white, ...FONTS.h3}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          {/* CLOSE BUTTON */}
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{height: 35, width: 35, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
        {/* PROFILE */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={dummyData.myProfile.profile_image}
            style={{
              height: 50,
              width: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* DRAWER ITEMS */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />

          {/* LINE DIVIDER */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Cupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>
        <View style={{marginBottom: SIZES.padding}}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
