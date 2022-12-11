import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const Title = ({ title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: titleSize,
            color: COLORS.primary
        }}>
            {title}
        </Text>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: subTitleSize,
            color: COLORS.primary
        }}>
            {subTitle}
        </Text>
    </View>
  )
}

export const EthPrice = ({ price }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary
        }}>{price} € / Stunde</Text>
      </View>
    )
  }

  
  export const ImageCmp = ({ imgURL, index }) => {
    return (
      <Image 
        source = {imgURL}
        resizeMode = "contain"
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
  }

  export const People = () => {
    return (
      <View style={{ flexDirection: "row" }}> 
        
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS,
        elevation: 1,
        maxWidth: "50%"
      }}>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary
        }}>
            Schon geübt:
        </Text>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
        }}>
            12h 30min
        </Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <People />
        <EndDate />
    
      </View>
    )
  }
  
  

