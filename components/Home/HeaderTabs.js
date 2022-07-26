
import { TouchableOpacity, View, Text,} from "react-native";

export default function HeaderTabs(props) {

    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            < HeaderButton text="Delivery"  btColor='#ffc529' textColor="white" activeTab={props.activeTab} setActiveTab={props.setActiveTab}> </HeaderButton >,
            < HeaderButton text="Pick Up" btColor='white' textColor="black" activeTab={props.activeTab} setActiveTab={props.setActiveTab}> </HeaderButton >,
            <HeaderButton text="Order" btColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} ></HeaderButton >,

        </View>
    );

    
}

const HeaderButton = (props) => {
    return (

        <TouchableOpacity style={{
            backgroundColor: props.activeTab == props.text ? "##ffc529" : "white",
            paddingVertical: 6,
            paddingHorizontal: 15,
            borderRadius: 30,
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{
                color: props.activeTab == props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: newFunction()
            }} >
                {props.text}
            </Text>
        </TouchableOpacity>


    );
};



function newFunction() {
    return "900";
}
