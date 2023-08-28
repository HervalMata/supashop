import React, { useState } from "react";
import { Alert, View, TextInput, Text, TouchableOpacity } from "react-native";
import { supabase } from "../../lib/supabase";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
// @ts-ignore
import { Link } from "react-navigation/native";
import AuthSkeleton from "./AuthSkeleton";
import MyButton from "../reusables/MyButton";

export default function MyAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    async function signUpWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    return (
        <AuthSkeleton
            title="Bemvindo novamente"
            subtitle="Entre na sua conta da Cris Laços"
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
                        // @ts-ignore
                        <EyeIcon color="black" className="bg-gray-500" size={20} />
                    ) : (
                        // @ts-ignore
                        <EyeSlashIcon color="black" className="bg-gray-500" size={20} />
                    )}
                </TouchableOpacity>
            </View>
            <View className="rounded-md mt-6 bg-accent-pink">
                <MyButton 
                    title="Entrar"
                    onPress={() => signInWithEmail()}
                />
            </View>
            <View>
                <Text className="flex-row px-4 mx-auto mt-5 text-center">
                    <Link to={{ screen: "SignUp"}}>
                        <Text className="text-accent-blue font-medium"> Cadastre-se</Text>
                    </Link>
                </Text>
            </View>
        </AuthSkeleton>    
    );
}