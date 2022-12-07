import React from 'react'
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'

const Details = ({ route, navigation }) => {
  return (
   <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar 
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
    />
   </SafeAreaView>
  )
}

export default Details