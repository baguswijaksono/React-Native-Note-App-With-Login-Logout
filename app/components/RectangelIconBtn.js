import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Rectanlebtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 35}
      color={color || 'black'}
      style={[
        {
          backgroundColor: '#9CF196',
          padding: 15,
          alignItems:'center',
          borderRadius: 10,
          elevation: 5,
        },
        { ...style },
      ]}
      onPress={onPress}
      
    />
  );
};
export default Rectanlebtn;
