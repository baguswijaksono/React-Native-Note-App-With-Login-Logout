import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Rectanlebtn from './RectangelIconBtn';

const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();

    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
          <TextInput
            value={title}
            onChangeText={(text) => handleOnChangeText(text, 'title')}
            placeholder="Judul"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder="Deskripsi"
            style={[styles.input, styles.desc]}
            onChangeText={(text) => handleOnChangeText(text, 'desc')}
          />
          <View style={styles.btnContainer}>
            <Rectanlebtn size={15} antIconName="check" onPress={handleSubmit} />
            {title.trim() || desc.trim() ? (
              <Rectanlebtn size={15} antIconName="close" onPress={closeModal} />
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#fafafa',
    fontSize: 20,
    color: 'black',
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    height: 669,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
});

export default NoteInputModal;
