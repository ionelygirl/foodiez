import React from 'react';
import styled from 'styled-components/native';

const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const Info = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.Text`
  color: #888;
`;

const Quantity = styled.Text`
  color: #555;
`;

export default function CartItem({ item }) {
  return (
    <Card>
      <Info>
        <Name>{item.name}</Name>
        <Price>${item.price.toFixed(2)}</Price>
        <Quantity>Quantity: {item.quantity}</Quantity>
      </Info>
    </Card>
  );
}
