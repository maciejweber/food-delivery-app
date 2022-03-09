import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Modal,
  Touchable,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Animated,
  View,
  Text,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';

import {
  IconButton,
  TwoPointSilder,
  TextButton,
  TextIconButton,
} from '../../components';
import {COLORS, constants, FONTS, icons, SIZES} from '../../constants';

const Section = ({containerStyle, title, children}) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle,
      }}>
      <Text style={{...FONTS.h3}}>{title}</Text>
      {children}
    </View>
  );
};

const FilterModal = ({isVisible, onClose}) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  const [deliveryTime, setDeliveryTime] = useState('');
  const [ratings, setRatings] = useState('');
  const [tags, setTags] = useState('');

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const height = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 600],
  });

  function renderDistance() {
    return (
      <Section title="Distance">
        <View
          style={{
            alignItems: 'center',
          }}>
          <TwoPointSilder
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  }

  function renderDeliveryTime() {
    return (
      <Section
        title="Delivery Time"
        containerStyle={{
          marginTop: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: SIZES.radius,
          }}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_time-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderPricingRange() {
    return (
      <Section title="Pricing Range">
        <View style={{alignItems: 'center'}}>
          <TwoPointSilder
            values={[10, 50]}
            min={1}
            max={100}
            prefix="$"
            postfix=""
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  }

  function renderRatings() {
    return (
      <Section title="Ratings" containerStyle={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`Ratings-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderTags() {
    return (
      <Section title="Tags">
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`Tags-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 5,
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: COLORS.transparentBlack7}}>
        {/* TRANSPARENT BACKGROUND */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              top: height,
              width: '100%',
              height: '100%',
              padding: SIZES.padding,
              borderTopRightRadius: SIZES.padding,
              borderTopLeftRadius: SIZES.padding,
              backgroundColor: COLORS.white,
            },
          ]}>
          {/* HEADER */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{flex: 1, ...FONTS.h3, fontSize: 18}}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.gray2,
              }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 250}}>
            {/* DISCTANCE */}
            {renderDistance()}

            {/* DELIVERY TIME */}
            {renderDeliveryTime()}

            {/* PRICING RANGE */}
            {renderPricingRange()}

            {/* RATINGS */}
            {renderRatings()}

            {/* TAGS */}
            {renderTags()}
          </ScrollView>
          {/* APPLY BUTTON */}
          <View
            style={{
              position: 'absolute',
              bottom: 100,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.padding,
              backgroundColor: COLORS.white,
            }}>
            <TextButton
              label="Apply Filters"
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log('Apply Filter')}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
