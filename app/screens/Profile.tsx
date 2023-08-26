import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./lib/supabase";

export default function Profile({}:{}): JSX.Element {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
        });
      
      }, []);

    const icon = session?.user?.avatar_url 
        ? { uri: session?.user?.avatar_url }
        : require("../assets/user-pic.png");  

    return (
        <SafeAreaView>
            <View className="px-8 max-w-xs flex flex-row space-x-5 items-center pý-16">
                <Image 
                    source={icon}
                    className="rounded-full"
                    style={{ nwidth: 60, height: 60 }}
                />
                <View className="flex space-y-2">
                    <Text className="capitalize">
                        {session?.user?.username ? session?.user?.username : "username"}
                    </Text>
                    <Text className="text-gray-600">
                        {session?.user?.email}
                    </Text>
                </View>
            </View>
            <View className="px-8">
                <FlatList
                    data={[
                        { title: "Ordens" },
                        { title: "Meus Dados" },
                        { title: "Enderêço de Entrega" },
                        { title: "Notificações" },
                        { title: "Contatos" },
                    ]}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </View>
        </SafeAreaView>
        
    );
}
