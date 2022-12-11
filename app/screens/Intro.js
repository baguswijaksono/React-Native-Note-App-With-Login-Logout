import AsyncStorage from '@react-native-async-storage/async-storage'
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
import RoundIconBtn from '../components/RoundIconBtn';
import NoteScreen from './NoteScreen';
  import NoteDetail from '../components/NoteDetail';
import { createStackNavigator } from '@react-navigation/stack';
import NoteProvider from '../contexts/NoteProvider';
import { NavigationContainer } from '@react-navigation/native';

const Intro = () => {
    const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(true);
      const [uname,setUname] = useState('');
      const [pass,setPass] = useState('');
      const Stack = createStackNavigator();
        const renderNoteScreen = (props) => <NoteScreen {...props}/>;
    if (uname=='bagus'&& pass=='bagus') return (
    <NavigationContainer independent={true}>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{ headerTitle: '', headerTransparent: true }}>
          <Stack.Screen component={renderNoteScreen} name="NoteScreen" />
          <Stack.Screen component={NoteDetail} name="NoteDetail" />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>)
    ;
    
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image
          style={{ width: width, height: 275 }}
          source={require('./l.png')}
        />
        <Text style={styles.inputTitle}>Masukan Username</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(uname) => setUname(uname)}
          value={uname}
        />
        <Text style={styles.inputTitle}>Masukan Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(pass) => setPass(pass)}
          value={pass}
        />
      </View>
    </>
  );
};


const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});

export default Intro;
