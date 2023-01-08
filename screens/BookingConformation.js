import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );

const BookingConformation = ({route, navigation}) => {
    const { data, bid } = route.params;

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
            paddingVertical: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.5)",
            zIndex: 1,
            }}
        >
            <RectButton 
            text={"Schließen"} 
            minWidth={170} 
            fontSize={SIZES.large} 
            handlePress={() => navigation.navigate("Home")}
            {...SHADOWS.dark} 
            />
        </View>
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            paddingBottom: SIZES.extraLarge * 3,
            }}
            ListHeaderComponent={() => (
            <React.Fragment>
                <DetailsHeader data={data} navigation={navigation} />
                <View style={{ 
                  padding: SIZES.font,
                  justifyContent: "center",
                  alignItems: "center"
                 }}>
                <Text
                  style={{
                    padding: SIZES.font,
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Die Buchung war erfolgreich!
                </Text>
                <Text
                  style={{
                    padding: SIZES.font,
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Wir haben {bid.name} über Deine Anfrage informiert
                </Text>
            </View>
            </React.Fragment>
            )}
        />
        </SafeAreaView>    
        )
};

export default BookingConformation