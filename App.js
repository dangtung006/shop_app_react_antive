import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from "./screens/categories";
import Category from "./screens/category";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Categories} />
                <Stack.Screen name="Category" component={Category} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;