import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList, Button, TouchableOpacity } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./lib/supabase";
import { ChevronRightIcon, MapPinIcon, NewspaperIcon, ShoppingBagIcon, PhoneIcon, BellIcon } from "react-native-heroicons/outline";
import { Link, NavigationContainer } from "@react-navigation/native";
import MyButton from "../../components/reusables/MyButton";

export default function MyProfile({ navigation }:{}): JSX.Element {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
        });
      
      }, []);

    const list: { title: string, icon: Element, link: string }[] = [
        { title: "Ordens", icon: ShoppingBagIcon, link: "Orders" },
        { title: "Meus Dados", icon: NewspaperIcon, link: "MyDetails" },
        { title: "Enderêço de Entrega", icon: MapPinIcon, link: "DeliveryAddress" },
        { title: "Notificações", icon: BellIcon, link: "Notifications" },
        { title: "Contatos", icon: PhoneIcon, link: "Contact" },
    ]  ;

    const icon = session?.user?.avatar_url 
        ? { uri: session?.user?.avatar_url }
        : require("../assets/user-pic.png");  

    return (
        <SafeAreaView>
            <View className="px-5 max-w-xs flex flex-row space-x-5 items-center pý-16">
                <Image 
                    source={icon}
                    className="rounded-full"
                    style={{ width: 60, height: 60 }}
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
            {list.map((item) => (
                <TouchableOpacity 
                    key={item.title}
                    onPress={() => { navigation.navigate(item.title) }}
                    className="px-5 flex-row py-5 space-x-4 items-center border-b border-gray-300">
                        <item.icon color="black" className="bg-gray-500" size={20} />
                        <View className="flex-1">
                            <Text className="font-semibold flex-1">{item.title}</Text>
                        </View>
                    <ChevronRightIcon color="black" size={20} />
                </TouchableOpacity>
            ))}
            <View className="pt-10 px-10">
                <MyButton 
                    title="Sair"
                    onPress={() => supabase.auth.signOut()}
                />
            </View>
        </SafeAreaView>
    );
}