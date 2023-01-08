import { View, Text, Image, Button } from 'react-native'
import React from 'react'

import { EthPrice } from './SubInfo'
import { SIZES } from '../constants'
import { InvisibleButton } from './Button'

const DetailsBid = ({ bid, navigation, data }) => {

const name = bid.name;

  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
    }}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        <InvisibleButton
          text={`Termin buchen mit ${bid.name}`}
          fontSize={SIZES.font} 
          handlePress={() => navigation.navigate("Booking", { data, bid })}
        />
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid