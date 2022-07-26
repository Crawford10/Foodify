import React from 'react';
import { Text, View,Image, ScrollView } from 'react-native';

const items = [
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text :"Hot deals",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "New Arrivals",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text :"Fast Food",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Kasi Flava",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Pizza",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Dessert",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Alcohol/Soft Drinks",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Healthy",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Steak & Grill",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Chicken",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Burgers",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Grocery",
    },

    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Sea food",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Sushi",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Restuarants",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Cafe",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Breakfast",
    },
    {
        image: require('C:/Users/Foodify/Assets/Images/'),
        text: "Cuisines",
    },


];
export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft : 20,
        }}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "centre", marginRight: 30 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                            }}>

                        </Image>,
                        <Text style={{ fontSize: 13, fontWeight: newFunction() }}
                        >
                            {item.text}</Text>
                    </View>))}
            </ScrollView>         </View>
    );
}

function newFunction() {
    return "900";
}