import { View, Text, ImageBackground, SafeAreaView, TextInput } from 'react-native';
import React, { ReactNode } from 'react';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HomeSkeleton({
    children,
    search,
    setSearch,
}: {
    children: ReactNode;
    search: string;
    setSearch: (text: string) => void;
}): JSX.Element {
  return (
    <>
        <View className="bg-accent-pink">
            <ImageBackground
                resizeMode="cover"
                source={require("../../assets/homebg.png")}
                imageStyle={{
                    opacity: 0.3,
                    background: "#00CC00"
                }}
            >
                <SafeAreaView>
                    <View className="flex items-center mt-14 mb-20">
                        <Text className="text-2x1 text-gray-50 font-bold">
                            HomeSkeleton
                        </Text>
                        <View className="relative mx-10 mt-4">
                            <TextInput 
                                className="border min-w-full py-4 pr-2 pl-10 rounded-xl border-pink-900 border-opacity-80 backdrop-blur-lg bg-gray-50"
                                placeholder="Pesquisar"
                                onChangeText={(text) => setSearch(text)}
                                value={search}
                            />
                            <View className="absolute left-0 top-0 h-full w-10 flex items-center justify-center">
                                <MagnifyingGlassIcon 
                                    color="black"
                                    className="bg-gray-500"
                                    size={20}
                                />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    </>
  );
}