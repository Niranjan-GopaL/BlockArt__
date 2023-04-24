import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font"; 

import Home from './screens/Home'
import Details from './screens/Details'

// Creating a theme 
const theme = {
  // spreading all the default themes to make a slight modification. LOL
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();





const  App= ()=> {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  
  
  // Initially these won't be loaded. So we'll return null then otherwise we'll render entire thing 
  if (!loaded) 
    return null;  
  else
    return (

      <NavigationContainer theme={theme}> 
        <Stack.Navigator
          screenOptions={{headerShown: false,}}
          initialRouteName="Home">

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;