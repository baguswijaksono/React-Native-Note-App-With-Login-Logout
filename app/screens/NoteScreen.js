import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import Note from '../components/Note';
import Intro from '../screens/Intro';
import NoteInputModal from '../components/NoteInputModal';
import RoundIconBtn from '../components/RoundIconBtn';
import LogOut from '../components/Logout';
import { useNotes } from '../contexts/NoteProvider';

const reverseData = (data) => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  });
};


const NoteScreen = ({navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);

  const { notes, setNotes, findNotes } = useNotes();
  const reverseNotes = reverseData(notes);

  const handleOnSubmit = async (title, desc) => {
    const note = { id: Date.now(), title, desc, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const openNote = (note) => {
    navigation.navigate('NoteDetail', { note });
  };

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery('');
      setResultNotFound(false);
      return await findNotes();
    }
    const filteredNotes = notes.filter((note) => {
      if (note.title.toLowerCase().includes(text.toLowerCase())) {
        return note;
      }
    });

    if (filteredNotes.length) {
      setNotes([...filteredNotes]);
    } else {
      setResultNotFound(true);
    }
  };
    if (isAppFirstTimeOpen) return <Intro/>;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fafafa'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ paddingHorizontal: 20, flex: 1, zIndex: 1 }}>
          <View
            style={{
              height: 150,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 35,paddingTop:75 }}>Semua Catatan</Text>
            <Text>{notes.length+' Catatan'}</Text>
          </View>
          <FlatList
            data={reverseNotes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Note onPress={() => openNote(item)} item={item} />
            )}
          />
                    
        </View>
      </TouchableWithoutFeedback>
      
      <RoundIconBtn
        onPress={() => setModalVisible(true)}
        antIconName="plus"
        style={{ position: 'absolute', right: 15, bottom: 50, zIndex: 1 }}
      />
            <LogOut
        onPress={() => setIsAppFirstTimeOpen(true)}
        antIconName="logout"
        style={{ position: 'absolute', right: 15, bottom: 125, zIndex: 1 }}
      />
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default NoteScreen;
