import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import * as permissions from 'expo-permissions';
import{BarCodeScanner} from 'expo-barcode-scanner'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class TransactionScreen extends react.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions:null,
            scannedBookId:'', 
            scannedStudentId:'', 
            buttonState:'normal'
        } 
    }

    getCameraPermissions = async(id) =>{
        const{status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
            hasCameraPermissions:Status === "granted", 
            buttonState:id, 
            scanned:false
        });
    }

    handleBarCodeScanned = async({type, data })=>{
        const{buttonState} = this.state
    
    
    if (buttonState==="BookId"){
        this.setState({
            scanned:true, 
            scannedBookId:data,
                buttonState:"normal"            
        })
    }


    else if(buttonState === "StudentId"){
        this.setState({
            scanned:true, 
            scannedStudentId:data, 
            buttonState:'normal'
        });
    }
}
render(){
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if(buttonState !== "normal" && hasCameraPermissions){

    }
}
}
