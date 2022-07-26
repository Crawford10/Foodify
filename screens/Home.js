
import { SafeAreaView, View, ScrollView} from 'react-native';
import { Divider } from "react-native-elements";
import HeaderTabs from 'C:/Users/Foodify/components/Home/HeaderTabs';
import SearchBar from 'C:/Users/Foodify/components/Home/SearchBar';
import Categories from 'C:/Users/Foodify/components/Home/Categories';
import ResturantsItems,{localRestuarantInfo} from 'C:/Users/Foodify/components/Home/ResturantsItems';
import  React ,{ useEffect, useState } from 'react';
import BottomTabs from '../components/Home/BottomTabs';

const YELP_API_LEY ="DJlCAzBr8daHZOwqcDnvIdyyR8Rb1Doot4XKe9PyFywXlQ4UOpz9l29WYknov3IyugPFTFdumWRAPccZ1l2BzQHAWZE37ah4KLxGbAjM5NXyKlcxdIhHKEylEPXeYnYx";
export default function Home() {
    const [restuarantData, setRuarantData] = useState(localRestuarantInfo);
    const [city, setCity] = useState("Pretoria");
    const [activeTab, setActiveTab] = useState("Delivery");
    const getRestuarantsFromYelp = () => {
        const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restuarant&location=${city}`;
    };
    const apiOptions = {
        Headers: {
            Authorization: `Bearer ${YELP_API_LEY}`,
        },
    };
    return fetch(yelpurl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRuarantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLocaleLowerCase))));
    useEffect(() => {
        getRestuarantsFromYelp();
    }, [city]);
    return (
        <SafeAreaView style={{ backgroundColor:"#eee",flex:1}} >
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab, setActiveTab = { setActiveTab }}></HeaderTabs>
                <SearchBar cityHandler={setCity}></SearchBar>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories></Categories>
                <ResturantsItems restuarantData={restuarantData} ></ResturantsItems>
            

            </ScrollView>
            <Divider width={1}>
               
            </Divider>
            <BottomTabs></BottomTabs>
        </SafeAreaView>
    );
}




