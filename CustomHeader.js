import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const IconButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #007bff;
  border-radius: 50px;
`;

const IconText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default function CustomHeader({ title, onPressIcon }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <IconButton onPress={onPressIcon}>
        <IconText>🛒</IconText> {/* Cart Icon */}
      </IconButton>
    </HeaderContainer>
  );
}
