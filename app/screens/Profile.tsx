import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./lib/supabase";
import { ChevronRightIcon, MapPinIcon, NewsPaperIcon, ShoppingBagIcon, PhoneIcon, BellIcon } from "react-native-heroicons/outline";

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
            <View className="">
                <FlatList
                    data={[
                        { title: "Ordens", icon: ShoppingBagIcon },
                        { title: "Meus Dados", icon: NewsPaperIcon },
                        { title: "Enderêço de Entrega", icon: MapPinIcon },
                        { title: "Notificações", icon: BellIcon },
                        { title: "Contatos", icon: PhoneIcon },
                    ]}
                    renderItem={({ item }) => (
                        <View className="px-8 flex-row py-5 space-x-4 items-center border-b border-gray-300">
                            <item.icon color="black" className="bg-gray-500" size={20} />
                            <Text className="font-semibold flex-1">{item.title}</Text>
                            <ChevronRightIcon color="black" size={20} />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
        
    );
}
