import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from  'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
    return (
        <View style={{ marginTop: 15, flexDirection:"row" }}>
            <GooglePlacesAutocomplete
                query={{ key: 'AklzaSyBN9WQ7C8xpgGG5mhN8mnGZ2q7Yh5oJrAM' }}
                onPress={(data, details = null) => {
                    console.log(data.description)
                    const city = data.description.split(',')[0]
                    cityHandler(city);
                }}
                placeholder="Search street address"
                style={{
                TextInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: newFunction(),
                    marginTop: 7,
                },
                TextInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                },
            }}
                renderLeftButton={() => (
                    <View style={{ marginLeft :10 }}>
                        <Ionicons name="location-sharp" size={24}></Ionicons>
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "white",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center"

                    }}>
                        <AntDesign name='clockcircle' size={11} style={{ marginRight :6 }}></AntDesign>,
                    <Text name="location-sharp" size={24}>Search</Text>
                </View>
            )}
            ></GooglePlacesAutocomplete>
        </View>
    );
}

function newFunction() {
    return "700";
}
