import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const LogOut = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || '#fafafa'}
      style={[
        {
          backgroundColor: '#ff3333',
          padding: 15,
          borderRadius: 100,
          elevation: 5,
        },
        { ...style },
      ]}
      onPress={onPress}
    />
  );
};

export default LogOut;
