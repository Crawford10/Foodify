import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import fontAwesome5 from 'react-native-vector-icons/fontAwesome5';
export default function BottomTabs() {
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between",
        }}>
            <Icon icon="home" text="Home"></Icon>
            <Icon icon="search" text="Search"></Icon>
            <Icon icon="grocery" text="Cart"></Icon>
            <Icon icon="receipt" text="Orders"></Icon>
            <Icon icon="user" text="Account"></Icon>
      </View>
  );
}

const Icon = (props) => (
    <TouchableOpacity>
    <View>
        <fontAwesome5 name={props.icon}
            size={25}
            style={{
                marginBottom: 3,
                alignSelf: "centre",
            }}>


        </fontAwesome5>
        <Text>{props.text}</Text>
        </View>
        </TouchableOpacity>
);
   