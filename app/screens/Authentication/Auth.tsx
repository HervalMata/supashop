import React from "react";
import { View, SafeAreaView } from "react-native";
import MyAuth from "../components/authentication/MyAuth";

export default function Auth() {
    return (
        <SafeAreaView>
            <MyAuth />
        </SafeAreaView>
    );
}