import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';
import React from 'react';

export default function AuthSkeleton({
    children,
    title,
    subtitle,
}: {
    children: ReactNode;
    title: string;
    subtitle: string;
}): JSX.Element {
  return (
    <SafeAreaView>
        <ImageBackground
            imageStyle={{ opacity: 0.09 }}
            source={require("../assets/loginbg.png")}
            resizeMode="cover"
        >
            <View className="h-screen">
                <Image 
                    style={{ width: 100, height: 100 }}
                    source={require("../assets/icon.png")}
                    className="-ml-2"
                />
                <View className="px-4 flex-col space-y-2 my-4">
                    <Text className="text-3x1 text-accent-blue font-bold">{title}</Text>
                    <Text className="text-gray-900">{subtitle}</Text>
                </View>
                <View className="px-4 flex-col space-y-3 pt-10">
                    {children}
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}