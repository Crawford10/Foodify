import React from 'react';
import { View,Text, Image,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ResturantsItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restuarantData.map((restuarant, index) => (

                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                    <RestuarantImage image={restuarant.image__url}></RestuarantImage>
                    <RestuarantInfo name={restuarant.name} rating={restuarant.rating}></RestuarantInfo>
                </View>
                ))}
        </TouchableOpacity>
    );
}

const RestuarantImage = (props) =>
(
    <>
        <Image source={{
            uri: props.image,
        }}>
            style={{ width: "100%", height: 180 }}

        </Image>,
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="white"></MaterialCommunityIcons>
        </TouchableOpacity>
    </>
);

const RestuarantInfo = (props) =>
(
    <View style={{ flexDirection: "Row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style=
                {{
                fontSize: 15,
                fontWeight: "bold"
                }}>
               props.name</Text>
            <Text style=
                {{
                fontSize: 13,
                color :"gray"
                }}>
                20- 45 min</Text>
        </View>
        <View style=
            {{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "centre",
            justifyContent:"centre",
            borderRadius :15,
            }}>
            <Text >props.rating</Text>
        </View>
       
    </View>
);


export const localRestuarantInfo = [
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating :4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    },
    {
        image_url: "",
        categories: ["Fast food", "Burgers", "Restuarants"],
        price: "R",
        reviews: 1244,
        rating: 4.8,
    }



]
