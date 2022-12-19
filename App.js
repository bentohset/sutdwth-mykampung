import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { LogBox } from 'react-native';
import { AuthProvider } from './hooks/useAuth';
LogBox.ignoreAllLogs(); //ignore log notification by message (for now)


export default function App() {
  // const [configProfile, setConfig] = useState(false);



  // const userSettings = {
  //   profileConfigured: configProfile,
  //   setConfig,
  // };

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
  );
  
}