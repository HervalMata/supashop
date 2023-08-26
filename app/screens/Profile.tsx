import React from "react";
import { View, Text } from "react-native";
import { Session } from "@supabase/supabase-js";

export default function Profile({session}:{session: Session}): JSX.Element {
    console.log("SESSION: ", session);

    return (
        <View>
            <Text>{JSON.stringify(session?.user?.email)}</Text>
        </View>
    );
}
