import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RoundIconBtn from './app/components/RoundIconBtn';
import NoteScreen from './app/screens/NoteScreen';
import NoteDetail from './app/components/NoteDetail';
import NoteProvider from './app/contexts/NoteProvider';

const Stack = createStackNavigator();

export default function App() {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(true);
  const renderNoteScreen = (props) => <NoteScreen {...props}/>;
  const width = Dimensions.get('window').width - 50;
   if (uname == 'bagus' && pass == 'bagus')   return (
    <NavigationContainer independent={true}>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{ headerTitle: '', headerTransparent: true }}>
          <Stack.Screen component={renderNoteScreen} name="NoteScreen" />
          <Stack.Screen component={NoteDetail} name="NoteDetail" />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>);
  if (isAppFirstTimeOpen) return(
        <>
      <StatusBar hidden />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ width: width, height: 275 }}
          source={require('./l.png')}
        />
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 25,
            marginBottom: 5,
            opacity: 0.5,
          }}>
          Masukan Username
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: 'black',
            color: 'black',
            width,
            height: 50,
            borderRadius: 10,
            paddingLeft: 15,
            fontSize: 25,
            marginBottom: 15,
          }}
          onChangeText={(uname) => setUname(uname)}
          value={uname}
        />
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 25,
            marginBottom: 5,
            opacity: 0.5,
          }}>
          Masukan Password
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: 'black',
            color: 'black',
            width,
            height: 50,
            borderRadius: 10,
            paddingLeft: 15,
            fontSize: 25,
            marginBottom: 15,
          }}
          onChangeText={(pass) => setPass(pass)}
          value={pass}
        />
      </View>
    </>
  ) ;
}
