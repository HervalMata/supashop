import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Favorite from "./screens/Favorite";
import Card from "./screens/Card";
import { HomeIcon, UserIcon, HeartIcon, ShoppingBagIcon } from "react-native-heroicons/outline";

const tab = createMaterialBottomTabNavigator();

function NavTab() {
    return (
        <Tab.Navigator
            initialRoutrName="Home"
            activeColor="#E68314"
            barStyle={{ backgroundColor: "#ffffff" }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} size={20} />
                }}
            />
            <Tab.Screen
                name="Card"
                component={Card}
                options={{
                    tabBarIcon: ({ color }) => <ShopopingBagIcon color={color} size={20} />
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({ color }) => <HeartIcon color={color} size={20} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <UserIcon color={color} size={20} />
                }}
            />
        </Tab.Navigator>
    );
}

export default NavTab;