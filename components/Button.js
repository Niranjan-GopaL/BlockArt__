// there are two Buttons being exported:- CircleButton and RectButton
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";



// The MOST BASIC SKELETON FOR BUTTONS 
function Rectangularbutton () {
  <TouchableOpacity>
    <Text>
        Press thiS to go to Euphoria !!!
    </Text>
  </TouchableOpacity>
}


function Circlebutton ({some_url}) {
  <TouchableOpacity>
    <Image source={some_url} />
  </TouchableOpacity>
}



export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (

    // In mobile devices we touch stuff and not "click". so things are not "clickable", they are "touchable" 
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      // Handling what should happen onPress (not onClick lol!)
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};







export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};