import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CardItem, Header, IconButton, TextButton} from '../../components';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';

const MyCard = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);
  function renderHeader() {
    return (
      <Header
        title="MY CARD"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 10,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{width: 40}} />}
      />
    );
  }

  function renderMyCards() {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({...item, key: 'MyCard'})}
            />
          );
        })}
      </View>
    );
  }

  function renderAddNewCard() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h3,
          }}>
          Add new card
        </Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({...item, key: 'NewCard'})}
            />
          );
        })}
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <TextButton
          disabled={selectedCard == null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == 'NewCard' ? 'Add' : 'Place your Order'}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* HEADER */}
      {renderHeader()}
      {/* CARDS */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}>
        {/* MY CARDS */}
        {renderMyCards()}
        {/* ADD NEW CARD */}
        {renderAddNewCard()}
      </ScrollView>
      {/* FOOTER */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;
