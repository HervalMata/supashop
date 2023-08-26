import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../lib/supabase";
import { Button, Input } from "react-native-elements";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        <View>
            <View>
                <Input
                    label="Email"
                    leftIcon={{ type: "font-awesome", name: "envelope" }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={"none"}
                    autoCompleteType={undefined}
                />
            </View>
            <View>
                <Input
                    label="Senha"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Senha"
                    autoCapitalize={"none"}
                    autoCompleteType={undefined}
                />
            </View>
            <View>
                <Button 
                    title="Entrar"
                    disabled={loading}
                    onPress={() => signInWithEmail()}
                />
            </View>
            <View>
                <Button 
                    title="Cadastrar"
                    disabled={loading}
                    onPress={() => signUpWithEmail()}
                />
            </View>
        </View>
    );
}