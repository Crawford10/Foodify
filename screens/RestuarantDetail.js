import React from 'react';
import { View,Text,} from 'react-native';
import About from "C:/Users/Foodify/components/restuarantDetail/About";
import MenuItems from "C:/Users/Foodify/components/restuarantDetail/MenuItems";
import { Divider } from "react-native-elements";


export default function RestuarantDetail () {
    return (
        <View>
            <About></About>
            <Divider width={1.8} style={{ marginVertical: 20 }}></Divider>
            <MenuItems></MenuItems>
        </View>

    );
}