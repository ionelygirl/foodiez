import React, { useState } from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import CartItem from '../components/CartItem';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const TotalPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([
    { id: 101, name: 'Classic Burger', price: 5.99, quantity: 1 },
    { id: 102, name: 'Cheese Burger', price: 6.99, quantity: 2 },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </Container>
  );
}
