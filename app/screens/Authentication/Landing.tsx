import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground, Image } from "react-native";
import MyButton from "../../components/reusables/MyButton";

export default function Landing({
    navigation,
}: {
    navigation: any;
}): JSX.Element {
    return (
        <ImageBackground
            imageStyle={{ opacity: 0.09 }}
            source={require("../assets/loginbg.png")}
            resizeMode="cover"
        >
            <SafeAreaView>
                <View className="h-screen px-4">
                    <Image 
                        style={{ width: "100%", height: 300, resizeMode: "contain", marginTop: 50 }}
                        source={require("../../assets/mainimage.png")}
                        className=""
                    />
                    <View className="flex-col space-y-2 mb-12">
                        <Text className="text-2x1 text-center font-bold text-gray-500">
                            Deixe sua cabeça ainda mais bonita
                        </Text>
                        <Text className="text-center text-gray-500 font-medium">
                            Com laços e tiaras criativas da Cris Laços
                        </Text>
                    </View>
                    <View className="flex-col items-center space-y-4">
                        <MyButton
                            title="Usuário existente (Entre)"
                            onPress={() => navigation.navigate("Auth")}
                        />
                        <TouchableOpacity
                            className="bg-accent-blue w-full rounded-lg"
                            style={{ backgroundColor: "#FFE4C7"}}
                            onPress={(e) => navigation.navigate("SignUp")}
                        >
                            <Text className="text-center text-gray-500 text-xs pt-4">
                                Cadastrando sua conta na Cris Laços, você está de acordo com nossos{" "}
                            </Text>
                            <Text className="text-center text-gray-500 text-xs">
                                Termos de Serviço e Politica de Privacidade
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}