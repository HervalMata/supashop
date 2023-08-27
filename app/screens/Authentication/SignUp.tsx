import React, { useState } from "react";
import { Alert, View, TextInput, Text, TouchableOpacity } from "react-native";
import { supabase } from "../../lib/supabase";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import { Link } from "react-navigation/native";
import AuthSkeleton from "../../components//AuthSkeleton";
import MyButton from "../../components/reusables/MyButton";

export default function MyAuth({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function signUp() {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            Alert.alert(error.message);
        } else {
            Alert.alert("Agora você pode entrar");
            navigation.navigate("Auth");
        }
        setLoading(false);
    }

    return (
        <AuthSkeleton
            title="Criar Conta"
            subtitle="Entre seus dados para criar sua conta da Cris Laços"
        >
            <TextInput
                className="border py-4 px-2 rounded-md border-pink-900 border-opacity-80 bg-gray-50"
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="email@address.com"
                autoCapitalize={"none"}
            />
            <View className="relative">
                <TextInput
                    className="border py-4 pl-2 pr-10 rounded-md border-pink-900 border-opacity-80 bg-gray-50"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={showPassword}
                    placeholder="Senha"
                    autoCapitalize={"none"}
                />
                <TouchableOpacity
                    className="absolute right-0 top-0 h-full w-10 flex items-center justify-center"
                    onPress={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeIcon color="black" className="bg-gray-500" size={20} />
                    ) : (
                        <EyeSlashIcon color="black" className="bg-gray-500" size={20} />
                    )}
                </TouchableOpacity>
            </View>
            <View className="rounded-md mt-6 bg-accent-pink">
                <MyButton 
                    title="Cadastrar"
                    onPress={() => signUp()}
                />
            </View>
            <View>
                <Text className="flex-row px-4 mx-auto mt-5 text-center">
                    <Link to={{ screen: "Auth"}}>
                        <Text className="text-accent-blue font-medium"> Entrar</Text>
                    </Link>
                </Text>
            </View>
        </AuthSkeleton>    
    );
}