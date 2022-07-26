import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const foodImage = "";


const Foods = [
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Salad',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Chicken',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Ricess',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    }, {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    },
    {
        title: 'Wings baffet',
        description: "The Description",
        price: "R 129.90",
        image: ""
    }

]
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
   titleStyle: {
        fontSize: 19,

       fontWeight: newFunction() ,
    },
});

export default function MenuItems() {
    return (
        < View style= { styles.menuItemStyle }>
        <FoodImage foodImage={foodImage}></FoodImage>

        <FoodInfo Food={Foods[0]}></FoodInfo >

       </View>)
       
    
      
}

const FoodImage = () => {
   
}

const FoodInfo = (props) => {
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.Foodtitle}</Text>
        <Text>{props.food.FoodDescription}</Text>
        <Text>{props.food.price}</Text>
    </View>


}

function newFunction() {
    return "600";
}