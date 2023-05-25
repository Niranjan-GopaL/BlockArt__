import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

// Gives the dark Navigation bar 
const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();

//  If we are on statusBar 
    return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar; 