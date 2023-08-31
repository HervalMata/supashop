import React from "react";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";

export default function Home() {
    return (
        <>
            <View>
                <ImageBackground
                    resizeMode="cover"
                    source={require("../assets/homebg.png")}
                    style={{ opacity: 0.2 }}
                >
                    <SafeAreaView>
                        <Text className="text-2x1">from Home</Text>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        </>
    );
}