import "react-native-url-polyfill";
import { NavigationContainer } from '@react-navigation/native';
import NavTab from "./components/NavTab";
import { supabase } from "./lib/supabase";
import React, { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import Auth from "./screens/Authentication/Auth";
import Landing from "./screens/Authentication/Landing";
import SignUp from "./screens/Authentication/SignUp";
import Contact from "./screens/Profile/Contact";
import MyProfile from "./screens/Profile/MyProfile";
import Notifications from "./screens/Profile/Notifications";
import Orders from "./screens/Profile/Orders";
import MyDetails from "./screens/Profile/MyDetails";
import DeliveryAddress from "./screens/Profile/DeliveryAddress";
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
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Nav" component={NavTab} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="MyDetails" component={MyDetails} />
          <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}