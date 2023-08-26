import React from "react";
import { View, SafeAreaView } from "react-native";
import MyAuth from "../components/MyAuth";

export default function Auth() {
    return (
        <SafeAreaView>
            <View>
                <MyAuth />
            </View>
        </SafeAreaView>
    );
}