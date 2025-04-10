import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default function CheckoutScreen() {
  return (
    <Container>
      <Title>Checkout</Title>
      <Text>Your order has been placed successfully!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
}
