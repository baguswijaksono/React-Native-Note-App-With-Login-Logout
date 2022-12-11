import { AntDesign } from '@expo/vector-icons';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || '#fafafa'}
      style={[
        {
          backgroundColor: '#f66a51',
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

export default RoundIconBtn;
