import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons';

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
    return <NavigationContainer>
        <BottomTab.Navigator initialRouteName="User" screenOptions={{

            headerStyle: {
                backgroundColor: '#3c0a6b'
            },
            headerTintColor: 'white',
            tabBarActiveTintColor: '#3c0a6b',

            // drawerActiveBackgroundColor: '#f0e1ff',
            // drawerActiveTintColor: '#3c0a6b',
            // drawerStyle: {
            //     backgroundColor: '#ccc'
            // }
        }}
        >
            <BottomTab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>
                    /*
                    // for drawer

                    drawerLabel: 'Welcome Screen',
                    drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>*/
                }}
            />
            <BottomTab.Screen
                name="User"
                component={UserScreen}
                options={{
                    tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size}/>
                    /*
                    // for drawer
                    drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={size}/>*/
                }}
            />
        </BottomTab.Navigator>
    </NavigationContainer>;
}
