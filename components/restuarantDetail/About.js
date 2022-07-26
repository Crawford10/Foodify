import React from 'react';
import {Image, Text, View } from 'react-native';

const image = "";
const title = 'Chicken Licken';
const description = 'Thai |  Comfort food  | R | 4star |(2914+)';

export default function About() {
    return
    (
        <View>
            <RestuarantImage image={image}></RestuarantImage>
            <RestuarantTile title={title}></RestuarantTile>
            <RestuarantDescription description={description}></RestuarantDescription>
        </View>
        
    );

}

const RestuarantImage = (props) => (
    <Image source={{ uri: props.image }} style={{width:'100%',height:180}}>

        </Image>
    
)

const RestuarantTile = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal :15,
    }} >
        {props.title}
    </Text>

)

const RestuarantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: newFunction(),
        fontSize:15.5,
    }}>
        {props.description}
    </Text>

)

function newFunction() {
    return "400";
}
