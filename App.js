import { SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import { Navigation } from './app/Navigation';
import AppLoading from 'expo-app-loading';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';


const fonts = ()=> Font.loadAsync({
  'multi':require('./app/assets/fonts/MultiroundPro.otf'),
  'yu-reg':require('./app/assets/fonts/YuGothicUIRegular.ttf'),
  'yu-semibold':require('./app/assets/fonts/YuGothicUISemibold.ttf')
});

export default function App() {
  const [font, setFont]=useState(false);
  if(font){
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <Navigation/>
      <StatusBar/>
      </SafeAreaView>
    );
  }else{
    return(
      <AppLoading startAsync={fonts} onFinish={()=>setFont(true)} onError={console.warn}/>
    )
  }

};