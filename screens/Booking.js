import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
//import MyDatePicker from "../components/MyDatePicker";
import DatePicker from 'react-native-modern-datepicker';


const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgURL={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Booking = ({route, navigation}) => {
  const { data, bid } = route.params;
  const [date, setDate] = useState(new Date())
  const text = `Buche jetzt eine Stunde mit ${bid.name}`
  const [selectedDate, setSelectedDate] = useState('');

  console.log(date);

  const bookingDate = date.toString;
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
      />

    <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton 
          text={"Buchen"} 
          minWidth={170} 
          fontSize={SIZES.large} 
          handlePress={() => navigation.navigate("BookingConformation", { data, bid })}
          {...SHADOWS.dark} 
          />
      </View>
      <FlatList
        data={data.bids}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <View style = {{
              justifyContent: "center",
              alignContent: "center",
              padding: SIZES.font
            }}>
              <Text style={{
                padding: SIZES.font,
                fontSize: SIZES.font,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary
              }}
              >
                {text}
              </Text>
            </View>
            <View>
              <DatePicker 
              onSelectedChange={date => setDate(date)}
              options={{
                backgroundColor: COLORS.white,
                textHeaderColor: COLORS.primary,
                textDefaultColor: COLORS.secondary,
                selectedTextColor: COLORS.white,
                mainColor: COLORS.secondary,
                textSecondaryColor: COLORS.secondary,
              }}
              style={{ borderRadius: 10 }}
              selectedDate ={date}
              />
            </View>
          </React.Fragment>
          
        )}
      />
    </SafeAreaView>
  )
}

export default Booking