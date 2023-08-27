import Contact from "./Profile/Contact";
import MyProfile from "./Profile/MyProfile";
import Notifications from "./Profile/Notifications";
import Orders from "./Profile/Orders";
import MyDetails from "./Profile/MyDetails";
import DeliveryAddress from "./Profile/DeliveryAddress";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Profile({}): JSX.Element {  

    return (
        <Stack.Navigator
            initialRouteName="MyProfile"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Group>
                <Stack.Screen name="MyProfile" component={MyProfile} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="MyDetails" component={MyDetails} />
                <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
