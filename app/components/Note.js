import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <View>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text numberOfLines={3}>{desc}</Text>
    </TouchableOpacity>
    <View style={{height:13 }}/>
    </View>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width- 1,
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
});

export default Note;