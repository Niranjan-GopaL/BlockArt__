// useState hook
import React, { useState } from "react";
// FlatList is similar to map, it is used to render a basic list ONLY WHEN THEY ARE 
// ABOUT TO APPEAR ON SCREEN and DELETES THEM WHEN THEY ARE OFF VIEW (LASERLOADING!!!)

// to make sure evverything fits on the screen => SafeAreaView
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";  
import { COLORS, NFTData } from "../constants";


const Home = () => {
  // NFTData is an array of 4 NFT's info
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (

// Two ways to style in native :- (i)  inline style (here)
//                                (ii) Styled components

    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>

        {/* This is the div that is CONTAINS NFT LIST */}
        <View style={{ zIndex: 0 }}>
          <FlatList
            // Just by howering over the nftData, you can see that it a info about ONE nft
            data={nftData}
            // Rendering each NFT Card
            renderItem={({ item }) => <NFTCard data={item} />}
            // id is the UNIQUE IDENTIFIER for each item (nft) in our list(NFTCard)
            keyExtractor={(item) => item.id}
            // Don't show that ugly vertical scrollbar 
            showsVerticalScrollIndicator={false}
            // So HomeHeader component can appear ABOVE our elements
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}/>
        </View>


        {/* This div or view rather ==>  BACKGROUND OF OUT NFT LIST */}
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,}}>

            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />

          </View>

      </View>
    </SafeAreaView>
  );
};

export default Home;