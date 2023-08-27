import "react-native-url-polyfill";
import { NavigationContainer } from '@react-navigation/native';
import NavTab from "./components/NavTab";
import { supabase } from "./lib/supabase";
import React, { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import Auth from "./screens/Auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  
  }, []);
  
  return (
    <NavigationContainer>
      {session ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name="Auth" component={Auth} />
          </Stack.Group>
        </Stack.Navigator>
      ) : (<NavTab />)}
    </NavigationContainer>
  );
}