import { View, Text, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";

// Inside of our constants, we can see themes.js where all the colors are defined
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";


const NFTCard = ({data}) => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

          {/* The Like BUTTON THAT IS TO APPEAR ON TOP OF ALL NFT CARDS!!!! */}
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard