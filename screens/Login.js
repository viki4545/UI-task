import React from "react";
import {StyleSheet, ScrollView, Dimensions, View, Text, Image, TextInput, Alert, TouchableOpacity} from "react-native";
import { 
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
  } from '@expo-google-fonts/poppins';

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const LoginScreen = ({navigation}) => {
    let [fontsLoad] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic 
    });
    if(!fontsLoad){
        return <AppLoading />;
    }
    return (
        <View style= {{flex: 1, backgroundColor: "#4563E4"}}>
            <View style={styles.loginContent}>
                <View>
                <Text style={[styles.label,{marginTop: 100}]}>Email Address</Text>
                <TextInput style={styles.input} keyboardType="email-address" placeholder="Enter your email" caretHidden={true}/>
                </View>
                <View>
                <Text style={[styles.label,{marginTop: 30}]}>Password</Text>
                <TextInput style={styles.input} keyboardType="visible-password" placeholder="Enter your password" caretHidden={true}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: "white"}}>Login</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{flex: 1,position: "absolute",flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", marginTop:150}}>
                <Image source={require("../assets/avatar-g27edf7341_640.png")} style={styles.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginContent: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FEFEFE", 
        height: Dimensions.get("window").height, 
        marginTop: 150, 
        marginBottom: 0,
        borderTopStartRadius:8, 
        borderTopEndRadius: 8
    },
    image: {
        position: "absolute",
        resizeMode: "contain",
        alignSelf: "center",
        height: 124,
        width: 124,
        borderWidth: 5,
        borderColor: "#ffff",
        borderRadius: 80

    },
    label: {
        flex: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        left: 10,
        width: 343,
        height: 18,
        color: "#416475",
        fontFamily: "Poppins_500Medium",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 18
    }, 
    input: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 12,
        paddingLeft: 10,
        width: 343,
        height: 52,
        backgroundColor: "#F7F7F7",
        borderRadius: 8,
        flex: 0,
        alignSelf: "stretch"
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: 343,
        height: 50,
        backgroundColor: "#4563E4",
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    }
});

export default LoginScreen;